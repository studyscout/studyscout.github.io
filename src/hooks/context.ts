import { readonly, writable } from 'svelte/store';
import type { LocationPromise } from '../interfaces/interfaces';

export const locationsStore = writable<LocationPromise>(undefined);
export const locationsRead = readonly<LocationPromise>(locationsStore);

// export const filterStore = writable<
