# 정렬 알고리즘

## 버블 정렬

```python
arr = [99,3,4,66,2,4,5,999,130,50,20,0,3]
N = len(arr)
for i in range(N-1, 0, -1):
    for j in range(i):
        if arr[j]>arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
print(arr)
```

## 카운팅 정렬

> 정수만 정렬 가능.

```python
arr = [99,3,4,66,2,4,5,999,130,50,20,0,3]
N = len(arr)
maxVal = max(arr)               # 최대값을 주어야함.
arrSorted = [0]*N               # N: 입력 arr의 길이 만큼.
arrCount = [0]*(maxVal+1)       # 최대값+1 만큼: 인덱스가 최대값까지 있어야한다.
for i in range(0, N):           # 개수 카운트해서 해당 인덱스에 저장.
    arrCount[arr[i]] += 1
for i in range(1, maxVal+1):    # 개수를 누적.
    arrCount[i] += arrCount[i-1]
for i in range(N-1, -1, -1):    # 뒤에서부터 입력배열을 읽으면서 정렬배열에 저장.
    arrCount[arr[i]] -= 1       # 카운트 배열에서 인덱스 읽어오기.
    arrSorted[arrCount[arr[i]]] = arr[i]
print(arrSorted)
```

## 선택 정렬

```python
arr = [99,3,4,66,2,4,5,999,130,50,20,0,3]
N = len(arr)
for i in range(N):
    minIdx = i                      # 맨 앞을 최소값으로 가정.
    for j in range(i+1, N):         # 미정렬 구간을 탐색하면서 최소값 찾는 과정.
        if arr[minIdx] > arr[j]:    # 최소값으로 가정했던 값이 더 크면 위치 교환.
            minIdx = j
    arr[i], arr[minIdx] = arr[minIdx], arr[i]
print(arr)
```

## 퀵 정렬

```python
arr = [99,3,4,66,2,4,5,999,130,50,20,0,3]
N = len(arr)
def quick_sort(arr):
    if len(arr) <= 1: return arr                    # 요소가 1개 이하면 리턴.
    pivot, tail = arr[0], arr[1:]                   # pivot: 기준 / 첫번째 요소를 사용.
    leftSide = [x for x in tail if x <= pivot]      # pivot 보다 작으면 leftSide.
    rightSide = [x for x in tail if x > pivot]      # pivot 보다 크면 rightSide.
    return quick_sort(leftSide) + [pivot] + quick_sort(rightSide)   # 재귀적으로 호출.
print(quick_sort(arr))
```