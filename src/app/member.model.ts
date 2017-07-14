import { Dog } from './dog.model';

export class Member {
  public milesHiked: number = 0;
  constructor (
    public name: string,
    public about: string,
    public position: string,
    public dogs: Dog[],
    public location: string,
    public interests: string
  ) { }
}
