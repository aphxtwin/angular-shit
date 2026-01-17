export interface Case {
  id: string;
  client: string;
  category: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  documents?: string[];
  createdAt: Date;
}

export interface CaseFormData {
  client: string;
  category: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  documents?: string[];
}
