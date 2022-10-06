export function currencyFormat(num) {
    return num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  export function currencyFormatDot(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }