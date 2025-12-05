[[interfaces]]:  
A blueprint that defines the structure of an object. Or a contract with a any class or object that uses that interface is obliged to only use the stated elements in the interface. 

```javascript
interface IsPerson {
name: string;
age: number;
speak(a: string): void;
spend(a: number): number;
}
```

In the example above, we see that, in future when a variable is declared with the name "isPerson". It is expected to have the above properties. 