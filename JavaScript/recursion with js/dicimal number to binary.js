let result = " ";
      const binary = (x) => {
        if(x === 0) return Number(result.split("").reverse().join(""));
        result+=(x % 2);
        x = Math.trunc(x/2);
        return binary(x);
      };
      let nbr = 3;
      //test
      console.log(binary(nbr));