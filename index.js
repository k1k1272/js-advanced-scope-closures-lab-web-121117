function produceDrivingRange(range) {
  return function(start, end) {
    let distance = Math.abs(
      parseInt(start.slice(0, 2)) - parseInt(end.slice(0, 2))
    );
    let newRange = Math.abs(range - distance);
    if (distance <= range) {
      return `within range by ${newRange}`;
    } else {
      return `${newRange} blocks out of range`;
    }
  };
}

function produceTipCalculator(percent) {
  return function(bill) {
    return percent * bill;
  };
}
