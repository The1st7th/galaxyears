export class Person 
{
  constructor(date) 
  {
    var completedate = date.split("/").map(Number);
    this.day = completedate[0];
    this.month = completedate[1];
    this.year = completedate[2];
    this.age;
  }
  age(){
  let age;
  let currentdate = new Date();
  age = (currentdate.getFullYear() - this.year)-1;
  
  if (currentdate.getMonth() - this.month >= 0 && currentdate.getDate() - this.day>=0)
  {
    age = age +1;
  } 
  this.age = age;
  }
  ageInSeconds(){
    
    this.age = this.age *365*24*60*60;
    const expentancy = 100000;
    if(this.age > expentancy){
      return this.age - expentancy;
    }
    
  }
  ageOnMercury(){
    let currentdate = new Date();
    this.age();
    let days;
    this.age = this.age/0.24;
    
    if (currentdate.getMonth()+1 < this.month)
    { 
      days = currentdate.getMonth() * 30 + currentdate.getDate();
      days = days + (12-this.month)*30 + 30 - this.day;
      console.log(days);
      this.age = Math.floor(this.age + days/(365*0.24));
      
    }
    if (currentdate.getMonth() > this.month)
    { 
      days = (this.month - currentdate.getMonth()-1) * 30 + currentdate.getDate();
      this.age =Math.floor( this.age + days/(365*0.24));
    }
    const expentancy = 100;
    if(this.age > expentancy){
      return this.age - expentancy;
    }
  }
    ageOnVenus(){
      let currentdate = new Date();
      this.age();
      let days;
      this.age = this.age/0.62;
      
      if (currentdate.getMonth()+1 < this.month)
      { 
        days = currentdate.getMonth() * 30 + currentdate.getDate();
        days = days + (12-this.month)*30 + 30 - this.day;
        console.log(days);
        this.age = Math.floor(this.age + 342/(365*0.62));
        console.log(this.age)
        
      }
      if (currentdate.getMonth() > this.month)
      { 
        days = (this.month - currentdate.getMonth()-1) * 30 + currentdate.getDate();
        this.age =Math.floor( this.age + days/(365*0.62));
      }
      const expentancy = 50;
      if(this.age > expentancy){
        return this.age - expentancy;
      }
  }
  ageOnMars(){
    let currentdate = new Date();
    this.age();
    let days;
    this.age = this.age/1.88;
    
    if (currentdate.getMonth()+1 < this.month)
    { 
      days = currentdate.getMonth() * 30 + currentdate.getDate();
      days = days + (12-this.month)*30 + 30 - this.day;
      console.log(days);
      this.age = Math.floor(this.age + 342/(365*1.88));
      console.log(this.age)
      
    }
    if (currentdate.getMonth() > this.month)
    { 
      days = (this.month - currentdate.getMonth()-1) * 30 + currentdate.getDate();
      this.age =Math.floor( this.age + days/(365*1.88));
    }
    const expentancy = 17;
    if(this.age > expentancy){
      return this.age - expentancy;
    }
} 
  ageOnJupiter(){
  let currentdate = new Date();
  this.age();
  let days;
  this.age = this.age/11.86;
  
  if (currentdate.getMonth()+1 < this.month)
  { 
    days = currentdate.getMonth() * 30 + currentdate.getDate();
    days = days + (12-this.month)*30 + 30 - this.day;
    console.log(days);
    this.age = Math.floor(this.age + 342/(365*11.86));
    console.log(this.age)
    
  }
  if (currentdate.getMonth() > this.month)
  { 
    days = (this.month - currentdate.getMonth()-1) * 30 + currentdate.getDate();
    this.age =Math.floor( this.age + days/(365*11.86));
  }
  const expentancy = 1;
  if(this.age > expentancy){
    return this.age - expentancy;
  }
}
}
