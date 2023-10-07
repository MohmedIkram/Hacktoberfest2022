#include <iostream>
#include <vector>

using namespace std;

// Function to generate Gray code sequence for 'n' bits

vector<string> generateGrayCode(int n) {
    // Base case
    if (n == 1) {
        vector<string> grayCode;
        grayCode.push_back("0");
        grayCode.push_back("1");
        return grayCode;
    }
    vector<string> prevGrayCode = generateGrayCode(n - 1);
    vector<string> grayCode;
    for (int i = 0; i < prevGrayCode.size(); i++) {
        grayCode.push_back("0" + prevGrayCode[i]);
    }
    for (int i = prevGrayCode.size() - 1; i >= 0; i--) {
        grayCode.push_back("1" + prevGrayCode[i]);
    }

    return grayCode;
}

int main() {
    int n;
    cout << "Enter the number of bits: ";
    cin >> n;

    vector<string> grayCode = generateGrayCode(n);

    cout << "Gray Code Sequence for " << n << " bits:\n";
    for (const string& code : grayCode) {
        cout << code << endl;
    }

    return 0;
}
