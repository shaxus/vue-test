class Person {
  constructor(height,weight){
    this.height = height;
    this.weight = weight;
  }

  sport(){
    console.log('跑的很快');
  }

  info(){
    const cc = () => {return 2;};
    console.log('身高:',this.height * 2);
    console.log('体重:',this.weight);
  }
}

export default Person;
