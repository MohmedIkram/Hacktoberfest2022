// Sublist Search

	// A Linked List node
	class Node {
	constructor() {
		this.data = 0;
		this.next = null;
	}
}

	// true if first list is in second list
	function findList(first, second) {
	var ptr1 = first, ptr2 = second;

		// linked lists are empty, return true
		if (first == null && second == null)
			return true;

		// other is not, return false
		if (first == null || (first != null &&
		second == null))
			return false;

		// Traverse the second list one by one
		while (second != null) {
			ptr2 = second;

			// matching first list with second
			while (ptr1 != null) {
				// If second list is empty return false
				if (ptr2 == null)
					return false;

				// If data part is same, go to next
				else if (ptr1.data == ptr2.data) {
					ptr1 = ptr1.next;
					ptr2 = ptr2.next;
				}

				// If not equal 
				else
					break;
			}

			// if first list gets traversed
			if (ptr1 == null)
				return true;

			ptr1 = first;
			second = second.next;
		}
		return false;
	}

	// print nodes in a given linked list
	function printList(node) {
		while (node != null) {
			document.write("%d ", node.data);
			node = node.next;
		}
	}

	// add new node to linked lists
	function newNode(key) {
		var temp = new Node();
		temp.data = key;
		temp.next = null;
		return temp;
	}

	// Driver Code
		var a = newNode(1);
		a.next = newNode(2);
		a.next.next = newNode(3);
		a.next.next.next = newNode(4);

		var b = newNode(1);
		b.next = newNode(2);
		b.next.next = newNode(1);
		b.next.next.next = newNode(2);
		b.next.next.next.next = newNode(3);
		b.next.next.next.next.next = newNode(4);

		if (findList(a, b) == true)
			document.write("LIST FOUND");
		else
			document.write("LIST NOT FOUND");
