export function parseBracketedText(input: string): string[] {
    const result: string[] = [];
    const regex = /\[([^\]]+)\]/g;
    let lastIndex = 0;
    let match;
  
    while ((match = regex.exec(input)) !== null) {
      // 前の文字列を追加
      if (match.index > lastIndex) {
        result.push(input.slice(lastIndex, match.index));
      }
  
      // []内の文字列を追加
      result.push(match[1]);
  
      // 次の開始位置
      lastIndex = regex.lastIndex;
    }
  
    // 残りの文字列を追加
    if (lastIndex < input.length) {
      result.push(input.slice(lastIndex));
    }
  
    return result;
  }
  