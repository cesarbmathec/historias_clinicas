export interface TokenResult {
    refresh: string | null,
    access: string | null,
}

export interface TokenState {
    tokenResult: TokenResult | null;
    error: string;
    loading: boolean;
  }