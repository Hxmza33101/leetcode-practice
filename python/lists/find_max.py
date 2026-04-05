def find_max(arr):
  i = 0
  current = 0
  while i < len(arr):
    if (arr[i] > current):
      current = arr[i]
    i += 1
  return current

find_max([1,5,2,9])  # → 9