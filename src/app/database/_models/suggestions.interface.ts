export interface SuggestionsEntity {
  $id: number;
  tags: string[];
  value: string;
  relevanceScore: number;
  matchedResults?: string[];
  isActive: boolean;
}
