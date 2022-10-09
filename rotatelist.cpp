/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        ListNode* head1=head;
        
        if(head==NULL)
        {
            return NULL;
        }
        
        if(head1->next==NULL)
        {
            return head;
        }
        int c=1;
        while(head->next!=NULL)
        {
            head=head->next;
            c++;
        }
        head=head1;
        k=k%c;
        for(int i=1;i<=k;i++)
        {
            head=head1;
            while(true)
            {
                if(head->next->next==NULL)
                {
                    head->next->next=head1;
                    head1=head->next;
                    head->next=NULL;
                    break;
                }
                else
                {
                    head=head->next;
                }
            }
        }
        return head1;
    }
};
