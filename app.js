const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {mean, median, mode, convertAndValidateNumsArray} = require( './function' )

app.get('/mean', function(req,res, next) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass numbers into query key with commas-sepperating list of numbers.', 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let result = {
    operation: 'mean',
    result: mean(nums)
  }
  return res.send(result);
})

app.get('/median', function(req,res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass numbers into query key with commas-sepperating list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: 'median',
        result: median(nums)
    }
    return res.send(result);
})

app.get('/mode', function(req,res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass numbers into query key with commas-sepperating list of numbers., 400')
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }
    let result = {
        operation: 'mode',
        result: mode(nums)
    }
    return res.send(result);
})


app.listen(3000, function () {
  console.log('App on port 3000');
})