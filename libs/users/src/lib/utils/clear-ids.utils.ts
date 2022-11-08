import { map, Observable } from 'rxjs';
import { User } from '../models/users.model';

export function clearUserIds() {
  return (src: Observable<User[]>): Observable<User[]> =>
    src.pipe(
      map((users) => {
        const filter1 = users.filter((user) => !!user.id.value);
        const filter2 = filter1.map((user) => ({
          ...user,
          id: {
            ...user.id,
            value: user.id.value.replace(/\s/g, '').replace(/\./g,'').replace(/-/g,''),
          },
        }));

        return filter2;
      })
    );
}
