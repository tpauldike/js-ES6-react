#include <stdio.h>

int i = 65;
void a_f(void); //function prototype
int main(void)
{
    printf("Before looping, i was: %c\n", i);
    a_f();
    i = 65;
    printf("After looping, i became: %c\n", i);

    return (0);
}

void a_f(void)
{
    for (i = 97; i < 103; i++)
        printf("%c\n", i);
}