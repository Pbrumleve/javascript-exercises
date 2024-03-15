const findTheOldest = function(obj) {
  let death = new Date().getFullYear();
  const sortOldest = obj.sort(function(a, b) {
    if (!a.yearOfDeath) {
    const lastInventor = death - a.yearOfBirth;
    const nextInventor = b.yearOfDeath - b.yearOfBirth;
    return lastInventor > nextInventor ? -1 : 1;
    } else if(!b.yearOfDeath) {
    const lastInventor = a.yearOfDeath - a.yearOfBirth;
    const nextInventor = death - b.yearOfBirth;
    return lastInventor > nextInventor ? -1 : 1;
    } else {
    const lastInventor = a.yearOfDeath - a.yearOfBirth;
    const nextInventor = b.yearOfDeath - b.yearOfBirth;
    return lastInventor > nextInventor ? -1 : 1;
    }
    })
  console.log(sortOldest);
  let oldest = sortOldest[0];
  console.log(oldest);
  return oldest;
  };

// Do not edit below this line
module.exports = findTheOldest;
