import { flow, makeAutoObservable } from 'mobx';
import { getPeople, getPerson, People, PersonForm, PersonFull } from 'shared/api/people';
import { peopleNormalize, personNormalize } from './shared/lib/normalizers';

export class PeopleStore {
  loading = false;

  error: string | null = null;

  data: People | null = null;

  constructor() {
    makeAutoObservable(this, {
      load: flow,
    });
  }

  *load({ search, page }: { search: string; page: number }, abortController?: AbortController) {
    this.data = null;
    this.loading = true;
    this.error = null;

    try {
      const { data } = yield getPeople({ search, page }, abortController?.signal);

      this.data = peopleNormalize(data);
      this.loading = false;
    } catch (error) {
      if (abortController?.signal.aborted) {
        this.loading = true;
      } else {
        this.loading = false;
        this.error = 'Server error';
      }
    }
  }
}

export class PersonStore {
  loading = false;

  error: string | null = null;

  data: PersonFull | null = null;

  constructor() {
    makeAutoObservable(this, {
      load: flow,
    });
  }

  *load(id: string, abortController?: AbortController) {
    this.data = null;
    this.loading = true;
    this.error = null;
    try {
      const { data } = yield getPerson(id, abortController?.signal);

      this.data = personNormalize(data);
      this.loading = false;
    } catch (error) {
      if (abortController?.signal.aborted) {
        this.loading = true;
      } else {
        this.loading = false;
        this.error = 'Server error';
      }
    }
  }

  changeData(form: PersonForm) {
    if (!this.data) {
      return;
    }

    const { id } = this.data;

    this.data = {
      id,
      ...form,
    };
  }
}
