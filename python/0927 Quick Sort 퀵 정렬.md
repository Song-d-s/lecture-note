# 퀵 정렬

## Quick Sort

### 1. 호아레 알고리즘 Hoare-Partition

```python
def partitionH(L, R):
    p = L
    i = L + 1
    j = R

    while i <= j:
        while i <= j and arr[i] <= arr[p]:  # 작은 동안 이동 / i, j 역전되면 이동 중지
            i += 1                          # <= 등호 없으면 같은 값이 있을 때 무한 루프 빠진다.
        while i <= j and arr[j] > arr[p]:   # 큰 동안 이동
            j -= 1
        if i < j:
            arr[i], arr[j] = arr[j], arr[i] # i 번째 j 번째 교환
    arr[p], arr[j] = arr[j], arr[p]
    return j
```

### 2. 로무토 알고리즘 Lomuto-Partition

```python
def partitionL(L, R):
    p = R           # 피봇 - 마지막 위치로 설정
    i = L - 1       # 나의 앞(없는 자리)을 가르키도록 설정 - j가 한칸 앞서가도록
    # j = L
    for j in range(L, R):
        if arr[j] < arr[p]:
            i += 1
            arr[j], arr[i] = arr[i], arr[j] # i, j 교환

    i += 1
    arr[p], arr[i] = arr[i], arr[p]
    return i
```


```python
def quick_s(L, R):
    if L < R:
        p = partitionL(L, R)
        quick_s(L, p-1)
        quick_s(p+1, R)

arr = [3,2,4,6,9,2,1,8,7,5]
quick_s(0, len(arr)-1)
print(arr)
```