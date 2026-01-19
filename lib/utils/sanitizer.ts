// Input sanitization matching iOS InputSanitizer

export class InputSanitizer {
  static sanitize(input: string): string {
    if (!input) return '';
    
    // Trim whitespace
    let sanitized = input.trim();
    
    // Remove control characters except newlines and tabs
    sanitized = sanitized.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '');
    
    // Limit length (iOS uses 200, but we'll keep it flexible)
    const maxLength = 200;
    if (sanitized.length > maxLength) {
      sanitized = sanitized.substring(0, maxLength);
    }
    
    return sanitized;
  }
  
  static isValid(input: string): boolean {
    const sanitized = this.sanitize(input);
    return sanitized.length > 0 && sanitized.length <= 200;
  }
}
