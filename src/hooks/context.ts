import { readonly, writable } from 'svelte/store';
import { type ListFilters, type LocationPromise } from '../interfaces/interfaces';

export const locationsStore = writable<LocationPromise>(undefined);
export const locationsRead = readonly<LocationPromise>(locationsStore);
export const filtersStore = writable<ListFilters>(undefined);
export const filtersRead = readonly<ListFilters>(filtersStore);

export const editTagsStore = writable<Record<string, boolean>>(undefined);

