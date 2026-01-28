export interface Patent {
  id: string;
  patentNumber: string;
  title: string;
  abstract: string;
  inventors: string[];
  assignee: string;
  filingDate: string;
  grantDate: string;
  url: string;
}

export interface PatentSearchResult {
  patents: Patent[];
  total: number;
  error?: string;
}

// USPTO PatentsView API - completely free, no API key needed
export async function searchPatents(query: string, page: number = 1, perPage: number = 25): Promise<PatentSearchResult> {
  if (!query.trim()) {
    return { patents: [], total: 0 };
  }

  try {
    // PatentsView API endpoint
    const apiUrl = 'https://api.patentsview.org/patents/query';
    
    const requestBody = {
      q: {
        _text_any: {
          patent_title: query,
          patent_abstract: query
        }
      },
      f: [
        "patent_number",
        "patent_title",
        "patent_abstract",
        "patent_date",
        "patent_firstnamed_inventor_city",
        "inventor_first_name",
        "inventor_last_name",
        "assignee_organization"
      ],
      o: {
        page: page,
        per_page: perPage
      },
      s: [{ patent_date: "desc" }]
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.patents || data.patents.length === 0) {
      return { patents: [], total: 0 };
    }

    const patents: Patent[] = data.patents.map((patent: any) => {
      const inventors = patent.inventors 
        ? patent.inventors.map((inv: any) => 
            `${inv.inventor_first_name || ''} ${inv.inventor_last_name || ''}`.trim()
          ).filter(Boolean)
        : [];
      
      const assignee = patent.assignees?.[0]?.assignee_organization || 'Unknown';
      
      return {
        id: patent.patent_number,
        patentNumber: patent.patent_number,
        title: patent.patent_title || 'No title',
        abstract: patent.patent_abstract || 'No abstract available',
        inventors: inventors.length > 0 ? inventors : ['Unknown'],
        assignee: assignee,
        filingDate: patent.patent_date || 'Unknown',
        grantDate: patent.patent_date || 'Unknown',
        url: `https://patents.google.com/patent/US${patent.patent_number}`
      };
    });

    return {
      patents,
      total: data.total_patent_count || patents.length
    };
  } catch (error) {
    console.error('Patent search error:', error);
    return {
      patents: [],
      total: 0,
      error: error instanceof Error ? error.message : 'Failed to fetch patents'
    };
  }
}

// European Patent Office OPS API (free tier available)
export async function searchEPOPatents(query: string): Promise<PatentSearchResult> {
  // EPO API requires registration, so we'll use a fallback approach
  // For now, we'll combine with USPTO results
  return { patents: [], total: 0 };
}

// WIPO Patent Scope (requires registration)
export async function searchWIPOPatents(query: string): Promise<PatentSearchResult> {
  return { patents: [], total: 0 };
}
