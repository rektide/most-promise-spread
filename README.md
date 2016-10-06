# Most Promise Spread

Convert a Promise whose fulfillment value is an Array into a [Most](https://github.com/cujojs/most) stream. This roughly parallels [Bluebird's Promise.spread](http://bluebirdjs.com/docs/api/spread.html), which likewise flattens a fulfilled array value.

This was developed to allow most.concatMap to work with Promises fulfilling into arrays. Some existing discussion in [Most#103](https://github.com/cujojs/most/issues/103#issuecomment-78247645) pointed to the strategy arrived at here, of using [unfold](https://github.com/cujojs/most/blob/master/docs/api.md#mostunfold).
