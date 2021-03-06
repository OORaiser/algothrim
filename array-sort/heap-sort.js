function siftDown(arr, start, end) {
    let rootIndex = start,
        swapIndex = start,
        leftChildIndex = rootIndex * 2 + 1,
        rightChildIndex = leftChildIndex + 1;

    while (leftChildIndex <= end) {
        if (arr[leftChildIndex] > arr[swapIndex]) {
            swapIndex = leftChildIndex;
        }
    
        if (rightChildIndex <= end && arr[rightChildIndex] > arr[swapIndex]) {
            swapIndex = rightChildIndex;
        }
    
        if (swapIndex === rootIndex) return;

        [arr[rootIndex], arr[swapIndex]] = [arr[swapIndex], arr[rootIndex]];

        rootIndex = swapIndex;
        leftChildIndex = rootIndex * 2 + 1;
        rightChildIndex = leftChildIndex + 1;
    }
}

function maxHeapify(arr) {
    for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
        siftDown(arr, i, arr.length - 1);
    }
}

function heapSort(arr) {
    maxHeapify(arr);

    let end = arr.length - 1;
    while (end > 0) {
        [arr[0], arr[end]] = [arr[end], arr[0]];
        end--;
        siftDown(arr, 0, end);
    }

    return arr;
}

export default heapSort;
