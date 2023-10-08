function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length <= 1) {
           return 0; // No overlaps if there are 0 or 1 intervals
       }
   
       intervals.sort((a, b) => a[1] - b[1]);
       let countOverLap = 0;
       let prevInterval = intervals[0];
   
       for (let i = 1; i < intervals.length; i++) {
           const currentInterval = intervals[i];
           if (currentInterval[0] < prevInterval[1]) {
               countOverLap++;
           } else {
               prevInterval = currentInterval; 
           }
       }
   
       return countOverLap;
   
   };
   
   