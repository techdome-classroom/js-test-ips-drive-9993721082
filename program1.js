function smallestMissingPositiveInteger(nums) {
  if (nums.length === 0) {
    return 1;
}

// Move all positive integers to the front of the list
let i = 0;
while (i < nums.length) {
    if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
        [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else {
        i++;
    }
}

// Find the smallest missing positive integer
for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
        return i + 1;
    }
}

