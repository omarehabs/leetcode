
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
   let cur = new ListNode()
    const temp = cur
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            cur.next = list1
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }

    if (list1 || list2) cur.next = list1 || list2

    return temp.next



};

console.log(mergeTwoLists(undefined, undefined))