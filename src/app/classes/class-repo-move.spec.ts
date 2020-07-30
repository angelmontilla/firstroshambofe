import { ClassRepoMove } from './class-repo-move';
import { ClassMove } from './class-move';
import { Enummove } from '../enums/enummove.enum';
import { Enumresult } from '../enums/enumresult.enum';

describe('ClassRepoMove', () => {
  it('should create an instance', () => {
    expect(new ClassRepoMove()).toBeTruthy();
  });

  it('Insert element', () => {
    const repo: ClassRepoMove = new ClassRepoMove();

    repo.addResult(new ClassMove(Enummove[0], Enummove[2], Enumresult[1]));
    repo.addResult(new ClassMove(Enummove[1], Enummove[2], Enumresult[1]));
    repo.addResult(new ClassMove(Enummove[2], Enummove[2], Enumresult[1]));
    repo.addResult(new ClassMove(Enummove[1], Enummove[2], Enumresult[1]));

    repo.listMoves.forEach(element => {
      console.log('First is: ' + element.first);
    });

    expect(true).toBe(true);
  });
});
