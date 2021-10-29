#include <iostream>
#include <cmath>


void quadraticSolver(float a, float b, float c) {

    float x1, x2, discriminant, realPart, imaginaryPart;
    discriminant = b*b - 4*a*c;

    if (discriminant > 0) {
        x1 = (-b + sqrt(discriminant)) / (2*a);
        x2 = (-b - sqrt(discriminant)) / (2*a);

        std::cout << "x1 = " << x1 << "\n" << "x2 = " << x2 << std::endl;
    }

    else if (discriminant == 0) {
        x1 = -b/(2*a);
        std::cout << "x1 and x2 = " << x1 << std::endl;
    }

    else {
        realPart = -b/(2*a);
        imaginaryPart = sqrt(-discriminant)/(2*a);

        std::cout << "x1 = " << realPart << " + " << imaginaryPart << "i" << std::endl;
        std::cout << "x2 = " << realPart << " - " << imaginaryPart << "i" << std::endl;
    }

}




int main() {

    float a, b, c;
    std::cout << "Enter the three coefficients";
    std::cin >> a >> b >> c;
    quadraticSolver(a, b, c);





    return 0;
}
