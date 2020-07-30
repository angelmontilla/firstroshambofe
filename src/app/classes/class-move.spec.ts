import { ClassMove } from './class-move';
import { Enummove } from '../enums/enummove.enum';
import { Enumresult } from '../enums/enumresult.enum';

describe('ClassMove', () => {
  it('should create an instance', () => {
    expect(new ClassMove(Enummove[0], Enummove[0], Enumresult[0])).toBeTruthy();
  });
});
