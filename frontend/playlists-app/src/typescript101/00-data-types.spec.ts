describe('Basic Data Types in TypeScript', () => {

        it('adding two numbers', () => {
            let a = 10, b = 20;

            let answer = a + b;

            expect(answer).toEqual(30);
        });

      it('variables with no types are any by default', () => {
        let x: number | string[] = 12;

         x= 123;

        // x = 'cat';

        x = ['Bird', 'Monkey'];

      });
});
