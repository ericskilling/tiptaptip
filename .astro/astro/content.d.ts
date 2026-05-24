declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"episodes": {
"episode-flashback-005-cleanse-me-up-cleanse-me-down.md": {
	id: "episode-flashback-005-cleanse-me-up-cleanse-me-down.md";
  slug: "episode-flashback-005-cleanse-me-up-cleanse-me-down";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"episode-flashback-260-out-of-order.md": {
	id: "episode-flashback-260-out-of-order.md";
  slug: "episode-flashback-260-out-of-order";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"episode-flashback-378-black-is-the-new-black.md": {
	id: "episode-flashback-378-black-is-the-new-black.md";
  slug: "episode-flashback-378-black-is-the-new-black";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"episode-flashback-393-lock-the-doors.md": {
	id: "episode-flashback-393-lock-the-doors.md";
  slug: "episode-flashback-393-lock-the-doors";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"on-podfading.md": {
	id: "on-podfading.md";
  slug: "on-podfading";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"rewind-ttt-183-hot-cold.md": {
	id: "rewind-ttt-183-hot-cold.md";
  slug: "rewind-ttt-183-hot-cold";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"rewind-ttt-211-hands-dick.md": {
	id: "rewind-ttt-211-hands-dick.md";
  slug: "rewind-ttt-211-hands-dick";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"rewind-ttt-25-pleather-daddy.md": {
	id: "rewind-ttt-25-pleather-daddy.md";
  slug: "rewind-ttt-25-pleather-daddy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"rewind-ttt-32-kick-to-the-balls.md": {
	id: "rewind-ttt-32-kick-to-the-balls.md";
  slug: "rewind-ttt-32-kick-to-the-balls";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"rewind-ttt-36-smoke-em-if-you-got-em.md": {
	id: "rewind-ttt-36-smoke-em-if-you-got-em.md";
  slug: "rewind-ttt-36-smoke-em-if-you-got-em";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"rewind-ttt-68-be-nice.md": {
	id: "rewind-ttt-68-be-nice.md";
  slug: "rewind-ttt-68-be-nice";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"rewind-ttt-7-weekendweak-end.md": {
	id: "rewind-ttt-7-weekendweak-end.md";
  slug: "rewind-ttt-7-weekendweak-end";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-1-lobster-pants.md": {
	id: "ttt-1-lobster-pants.md";
  slug: "ttt-1-lobster-pants";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-10-haters.md": {
	id: "ttt-10-haters.md";
  slug: "ttt-10-haters";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-100-we-are-fun.md": {
	id: "ttt-100-we-are-fun.md";
  slug: "ttt-100-we-are-fun";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-101-more-of-us-to-love.md": {
	id: "ttt-101-more-of-us-to-love.md";
  slug: "ttt-101-more-of-us-to-love";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-102-bug-bites.md": {
	id: "ttt-102-bug-bites.md";
  slug: "ttt-102-bug-bites";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-103-trouble-every-day.md": {
	id: "ttt-103-trouble-every-day.md";
  slug: "ttt-103-trouble-every-day";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-104-claudia-schiffer.md": {
	id: "ttt-104-claudia-schiffer.md";
  slug: "ttt-104-claudia-schiffer";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-105-dirty-birds.md": {
	id: "ttt-105-dirty-birds.md";
  slug: "ttt-105-dirty-birds";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-106-whip-your-titties-out.md": {
	id: "ttt-106-whip-your-titties-out.md";
  slug: "ttt-106-whip-your-titties-out";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-107-strikeout.md": {
	id: "ttt-107-strikeout.md";
  slug: "ttt-107-strikeout";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-108-the-doctor-is-in.md": {
	id: "ttt-108-the-doctor-is-in.md";
  slug: "ttt-108-the-doctor-is-in";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-109-cougar-scouts.md": {
	id: "ttt-109-cougar-scouts.md";
  slug: "ttt-109-cougar-scouts";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-11-desperate-measures.md": {
	id: "ttt-11-desperate-measures.md";
  slug: "ttt-11-desperate-measures";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-110-up-for-a-bit-with-tip-tap-tip.md": {
	id: "ttt-110-up-for-a-bit-with-tip-tap-tip.md";
  slug: "ttt-110-up-for-a-bit-with-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-111-the-power-of-love.md": {
	id: "ttt-111-the-power-of-love.md";
  slug: "ttt-111-the-power-of-love";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-112-help-the-aged.md": {
	id: "ttt-112-help-the-aged.md";
  slug: "ttt-112-help-the-aged";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-113-no-hamsters-no-crazies.md": {
	id: "ttt-113-no-hamsters-no-crazies.md";
  slug: "ttt-113-no-hamsters-no-crazies";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-114-touched-by-an-angel.md": {
	id: "ttt-114-touched-by-an-angel.md";
  slug: "ttt-114-touched-by-an-angel";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-115-mini-podcasters.md": {
	id: "ttt-115-mini-podcasters.md";
  slug: "ttt-115-mini-podcasters";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-116-flow-it-show-it.md": {
	id: "ttt-116-flow-it-show-it.md";
  slug: "ttt-116-flow-it-show-it";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-117-too-slow.md": {
	id: "ttt-117-too-slow.md";
  slug: "ttt-117-too-slow";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-118-shit-sandwiches.md": {
	id: "ttt-118-shit-sandwiches.md";
  slug: "ttt-118-shit-sandwiches";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-119-the-sequel.md": {
	id: "ttt-119-the-sequel.md";
  slug: "ttt-119-the-sequel";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-12-dont-shit-where-you-eat.md": {
	id: "ttt-12-dont-shit-where-you-eat.md";
  slug: "ttt-12-dont-shit-where-you-eat";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-120-playing-dressup.md": {
	id: "ttt-120-playing-dressup.md";
  slug: "ttt-120-playing-dressup";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-121-at-the-hop.md": {
	id: "ttt-121-at-the-hop.md";
  slug: "ttt-121-at-the-hop";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-122-small-talk.md": {
	id: "ttt-122-small-talk.md";
  slug: "ttt-122-small-talk";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-123-fight-night.md": {
	id: "ttt-123-fight-night.md";
  slug: "ttt-123-fight-night";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-124-god-hates-tip-tap-tip.md": {
	id: "ttt-124-god-hates-tip-tap-tip.md";
  slug: "ttt-124-god-hates-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-125-how-not-to-be-famous.md": {
	id: "ttt-125-how-not-to-be-famous.md";
  slug: "ttt-125-how-not-to-be-famous";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-126-sexual-education.md": {
	id: "ttt-126-sexual-education.md";
  slug: "ttt-126-sexual-education";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-127-5-how-to-podcast-the-tip-tap-tip-way.md": {
	id: "ttt-127-5-how-to-podcast-the-tip-tap-tip-way.md";
  slug: "ttt-127-5-how-to-podcast-the-tip-tap-tip-way";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-127-for-your-consideration.md": {
	id: "ttt-127-for-your-consideration.md";
  slug: "ttt-127-for-your-consideration";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-128-confidence-booster.md": {
	id: "ttt-128-confidence-booster.md";
  slug: "ttt-128-confidence-booster";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-129-crosstown-trafficking.md": {
	id: "ttt-129-crosstown-trafficking.md";
  slug: "ttt-129-crosstown-trafficking";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-13-bride-of-tip-tap-tip.md": {
	id: "ttt-13-bride-of-tip-tap-tip.md";
  slug: "ttt-13-bride-of-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-130-close-encounters.md": {
	id: "ttt-130-close-encounters.md";
  slug: "ttt-130-close-encounters";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-131-gift-giving.md": {
	id: "ttt-131-gift-giving.md";
  slug: "ttt-131-gift-giving";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-132-inappropriate-behaviour.md": {
	id: "ttt-132-inappropriate-behaviour.md";
  slug: "ttt-132-inappropriate-behaviour";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-133-pole-position.md": {
	id: "ttt-133-pole-position.md";
  slug: "ttt-133-pole-position";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-134-back-in-time.md": {
	id: "ttt-134-back-in-time.md";
  slug: "ttt-134-back-in-time";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-135-the-tip-tap-tip-challenge.md": {
	id: "ttt-135-the-tip-tap-tip-challenge.md";
  slug: "ttt-135-the-tip-tap-tip-challenge";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-136-totally-fuckable.md": {
	id: "ttt-136-totally-fuckable.md";
  slug: "ttt-136-totally-fuckable";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-137-balls-to-the-wall.md": {
	id: "ttt-137-balls-to-the-wall.md";
  slug: "ttt-137-balls-to-the-wall";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-138-business-minded.md": {
	id: "ttt-138-business-minded.md";
  slug: "ttt-138-business-minded";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-139-we-are-not-puppets.md": {
	id: "ttt-139-we-are-not-puppets.md";
  slug: "ttt-139-we-are-not-puppets";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-14-pizza-party-bubblebath.md": {
	id: "ttt-14-pizza-party-bubblebath.md";
  slug: "ttt-14-pizza-party-bubblebath";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-140-storytelling.md": {
	id: "ttt-140-storytelling.md";
  slug: "ttt-140-storytelling";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-141-twenty-questions-2.md": {
	id: "ttt-141-twenty-questions-2.md";
  slug: "ttt-141-twenty-questions-2";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-142-phantom-power.md": {
	id: "ttt-142-phantom-power.md";
  slug: "ttt-142-phantom-power";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-143-lets-go-crazy.md": {
	id: "ttt-143-lets-go-crazy.md";
  slug: "ttt-143-lets-go-crazy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-144-form-fitting.md": {
	id: "ttt-144-form-fitting.md";
  slug: "ttt-144-form-fitting";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-145-its-so-easy.md": {
	id: "ttt-145-its-so-easy.md";
  slug: "ttt-145-its-so-easy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-146-dinner-for-two.md": {
	id: "ttt-146-dinner-for-two.md";
  slug: "ttt-146-dinner-for-two";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-147-everythings-coming-up-tip-tap-tip.md": {
	id: "ttt-147-everythings-coming-up-tip-tap-tip.md";
  slug: "ttt-147-everythings-coming-up-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-148-wild-animals.md": {
	id: "ttt-148-wild-animals.md";
  slug: "ttt-148-wild-animals";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-149-in-a-pinch.md": {
	id: "ttt-149-in-a-pinch.md";
  slug: "ttt-149-in-a-pinch";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-15-gone-eatin.md": {
	id: "ttt-15-gone-eatin.md";
  slug: "ttt-15-gone-eatin";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-150-hunting-season.md": {
	id: "ttt-150-hunting-season.md";
  slug: "ttt-150-hunting-season";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-151-speech-impediments.md": {
	id: "ttt-151-speech-impediments.md";
  slug: "ttt-151-speech-impediments";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-152-eating-habits.md": {
	id: "ttt-152-eating-habits.md";
  slug: "ttt-152-eating-habits";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-153-mind-your-mouth.md": {
	id: "ttt-153-mind-your-mouth.md";
  slug: "ttt-153-mind-your-mouth";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-154-the-hunger.md": {
	id: "ttt-154-the-hunger.md";
  slug: "ttt-154-the-hunger";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-155-spirited-discussions.md": {
	id: "ttt-155-spirited-discussions.md";
  slug: "ttt-155-spirited-discussions";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-156-guessing-games.md": {
	id: "ttt-156-guessing-games.md";
  slug: "ttt-156-guessing-games";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-157-newsworthy.md": {
	id: "ttt-157-newsworthy.md";
  slug: "ttt-157-newsworthy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-158-taking-one-for-the-team.md": {
	id: "ttt-158-taking-one-for-the-team.md";
  slug: "ttt-158-taking-one-for-the-team";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-159-bend-from-the-hips.md": {
	id: "ttt-159-bend-from-the-hips.md";
  slug: "ttt-159-bend-from-the-hips";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-16-egg-on-your-face.md": {
	id: "ttt-16-egg-on-your-face.md";
  slug: "ttt-16-egg-on-your-face";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-160-consummate-professionals.md": {
	id: "ttt-160-consummate-professionals.md";
  slug: "ttt-160-consummate-professionals";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-161-keeping-tabs.md": {
	id: "ttt-161-keeping-tabs.md";
  slug: "ttt-161-keeping-tabs";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-162-its-not-me-its-you.md": {
	id: "ttt-162-its-not-me-its-you.md";
  slug: "ttt-162-its-not-me-its-you";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-163-international-pop-overthrow.md": {
	id: "ttt-163-international-pop-overthrow.md";
  slug: "ttt-163-international-pop-overthrow";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-164-rugged-good-looks.md": {
	id: "ttt-164-rugged-good-looks.md";
  slug: "ttt-164-rugged-good-looks";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-165-i-scream-you-scream.md": {
	id: "ttt-165-i-scream-you-scream.md";
  slug: "ttt-165-i-scream-you-scream";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-166-fuck-this-noise.md": {
	id: "ttt-166-fuck-this-noise.md";
  slug: "ttt-166-fuck-this-noise";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-167-turn-me-loose.md": {
	id: "ttt-167-turn-me-loose.md";
  slug: "ttt-167-turn-me-loose";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-168-fact-checking.md": {
	id: "ttt-168-fact-checking.md";
  slug: "ttt-168-fact-checking";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-169-skin-diving.md": {
	id: "ttt-169-skin-diving.md";
  slug: "ttt-169-skin-diving";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-17-my-dinner-with-tip-tap-tip.md": {
	id: "ttt-17-my-dinner-with-tip-tap-tip.md";
  slug: "ttt-17-my-dinner-with-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-170-career-suicide.md": {
	id: "ttt-170-career-suicide.md";
  slug: "ttt-170-career-suicide";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-171-juvenilism.md": {
	id: "ttt-171-juvenilism.md";
  slug: "ttt-171-juvenilism";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-172-can-you-keep-a-secret.md": {
	id: "ttt-172-can-you-keep-a-secret.md";
  slug: "ttt-172-can-you-keep-a-secret";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-173-cooking-the-books.md": {
	id: "ttt-173-cooking-the-books.md";
  slug: "ttt-173-cooking-the-books";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-174-strutter.md": {
	id: "ttt-174-strutter.md";
  slug: "ttt-174-strutter";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-175-hot-chocolate-city.md": {
	id: "ttt-175-hot-chocolate-city.md";
  slug: "ttt-175-hot-chocolate-city";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-176-5-roughing-it.md": {
	id: "ttt-176-5-roughing-it.md";
  slug: "ttt-176-5-roughing-it";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-176-the-other-c-word.md": {
	id: "ttt-176-the-other-c-word.md";
  slug: "ttt-176-the-other-c-word";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-177-bite-me.md": {
	id: "ttt-177-bite-me.md";
  slug: "ttt-177-bite-me";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-178-the-great-escape.md": {
	id: "ttt-178-the-great-escape.md";
  slug: "ttt-178-the-great-escape";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-179-critical-thinking.md": {
	id: "ttt-179-critical-thinking.md";
  slug: "ttt-179-critical-thinking";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-18-hell-bent-for-elves.md": {
	id: "ttt-18-hell-bent-for-elves.md";
  slug: "ttt-18-hell-bent-for-elves";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-180-brick-mortar.md": {
	id: "ttt-180-brick-mortar.md";
  slug: "ttt-180-brick-mortar";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-181-pillow-talk.md": {
	id: "ttt-181-pillow-talk.md";
  slug: "ttt-181-pillow-talk";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-182-sweater-weather.md": {
	id: "ttt-182-sweater-weather.md";
  slug: "ttt-182-sweater-weather";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-183-hot-or-cold.md": {
	id: "ttt-183-hot-or-cold.md";
  slug: "ttt-183-hot-or-cold";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-184-double-date.md": {
	id: "ttt-184-double-date.md";
  slug: "ttt-184-double-date";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-185-i-love-you.md": {
	id: "ttt-185-i-love-you.md";
  slug: "ttt-185-i-love-you";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-186-tip-tap-tip-time.md": {
	id: "ttt-186-tip-tap-tip-time.md";
  slug: "ttt-186-tip-tap-tip-time";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-187-working-in-working-out.md": {
	id: "ttt-187-working-in-working-out.md";
  slug: "ttt-187-working-in-working-out";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-188-pissing-match.md": {
	id: "ttt-188-pissing-match.md";
  slug: "ttt-188-pissing-match";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-189-tight-squeeze.md": {
	id: "ttt-189-tight-squeeze.md";
  slug: "ttt-189-tight-squeeze";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-19-grammatically-correct.md": {
	id: "ttt-19-grammatically-correct.md";
  slug: "ttt-19-grammatically-correct";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-190-cookie-monsters.md": {
	id: "ttt-190-cookie-monsters.md";
  slug: "ttt-190-cookie-monsters";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-191-shits-and-giggles.md": {
	id: "ttt-191-shits-and-giggles.md";
  slug: "ttt-191-shits-and-giggles";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-192-more-bounce-to-the-ounce.md": {
	id: "ttt-192-more-bounce-to-the-ounce.md";
  slug: "ttt-192-more-bounce-to-the-ounce";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-193-european-dream.md": {
	id: "ttt-193-european-dream.md";
  slug: "ttt-193-european-dream";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-194-hardcore.md": {
	id: "ttt-194-hardcore.md";
  slug: "ttt-194-hardcore";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-195-cold-leatherette.md": {
	id: "ttt-195-cold-leatherette.md";
  slug: "ttt-195-cold-leatherette";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-196-birdfeeder.md": {
	id: "ttt-196-birdfeeder.md";
  slug: "ttt-196-birdfeeder";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-197-off-topic.md": {
	id: "ttt-197-off-topic.md";
  slug: "ttt-197-off-topic";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-198-our-love-will-not-let-you-down.md": {
	id: "ttt-198-our-love-will-not-let-you-down.md";
  slug: "ttt-198-our-love-will-not-let-you-down";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-199-tip-tap-tip-is-alive-and-well-and-living-in-calgary.md": {
	id: "ttt-199-tip-tap-tip-is-alive-and-well-and-living-in-calgary.md";
  slug: "ttt-199-tip-tap-tip-is-alive-and-well-and-living-in-calgary";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-2-eric-ruins-the-show.md": {
	id: "ttt-2-eric-ruins-the-show.md";
  slug: "ttt-2-eric-ruins-the-show";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-20-making-up-making-out.md": {
	id: "ttt-20-making-up-making-out.md";
  slug: "ttt-20-making-up-making-out";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-200-mango-tango.md": {
	id: "ttt-200-mango-tango.md";
  slug: "ttt-200-mango-tango";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-201-pie-in-the-sky.md": {
	id: "ttt-201-pie-in-the-sky.md";
  slug: "ttt-201-pie-in-the-sky";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-202-just-say-maybe.md": {
	id: "ttt-202-just-say-maybe.md";
  slug: "ttt-202-just-say-maybe";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-203-little-hearts.md": {
	id: "ttt-203-little-hearts.md";
  slug: "ttt-203-little-hearts";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-204-clothing-optional.md": {
	id: "ttt-204-clothing-optional.md";
  slug: "ttt-204-clothing-optional";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-205-group-activities.md": {
	id: "ttt-205-group-activities.md";
  slug: "ttt-205-group-activities";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-206-generalizations.md": {
	id: "ttt-206-generalizations.md";
  slug: "ttt-206-generalizations";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-207-in-it-for-the-money.md": {
	id: "ttt-207-in-it-for-the-money.md";
  slug: "ttt-207-in-it-for-the-money";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-208-tip-tap-tip-sell-out.md": {
	id: "ttt-208-tip-tap-tip-sell-out.md";
  slug: "ttt-208-tip-tap-tip-sell-out";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-209-put-on-a-happy-fucking-face.md": {
	id: "ttt-209-put-on-a-happy-fucking-face.md";
  slug: "ttt-209-put-on-a-happy-fucking-face";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-21-provocateurs.md": {
	id: "ttt-21-provocateurs.md";
  slug: "ttt-21-provocateurs";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-210-intelligent-lifeforms.md": {
	id: "ttt-210-intelligent-lifeforms.md";
  slug: "ttt-210-intelligent-lifeforms";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-211-all-hands-on-dick.md": {
	id: "ttt-211-all-hands-on-dick.md";
  slug: "ttt-211-all-hands-on-dick";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-212-team-players.md": {
	id: "ttt-212-team-players.md";
  slug: "ttt-212-team-players";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-213-gentlemen-amateurs.md": {
	id: "ttt-213-gentlemen-amateurs.md";
  slug: "ttt-213-gentlemen-amateurs";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-214-concrete-streets-executive-suites.md": {
	id: "ttt-214-concrete-streets-executive-suites.md";
  slug: "ttt-214-concrete-streets-executive-suites";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-215-everything-to-everybody.md": {
	id: "ttt-215-everything-to-everybody.md";
  slug: "ttt-215-everything-to-everybody";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-216-cock-lollies.md": {
	id: "ttt-216-cock-lollies.md";
  slug: "ttt-216-cock-lollies";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-217-give-a-shit.md": {
	id: "ttt-217-give-a-shit.md";
  slug: "ttt-217-give-a-shit";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-218-cats-me-to-the-end-of-love.md": {
	id: "ttt-218-cats-me-to-the-end-of-love.md";
  slug: "ttt-218-cats-me-to-the-end-of-love";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-219-were-here-to-help.md": {
	id: "ttt-219-were-here-to-help.md";
  slug: "ttt-219-were-here-to-help";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-22-calgarys-next-top-podcast.md": {
	id: "ttt-22-calgarys-next-top-podcast.md";
  slug: "ttt-22-calgarys-next-top-podcast";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-220-memory-lapse.md": {
	id: "ttt-220-memory-lapse.md";
  slug: "ttt-220-memory-lapse";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-221-hope-for-the-hopeless.md": {
	id: "ttt-221-hope-for-the-hopeless.md";
  slug: "ttt-221-hope-for-the-hopeless";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-222-queen-of-the-galaxy.md": {
	id: "ttt-222-queen-of-the-galaxy.md";
  slug: "ttt-222-queen-of-the-galaxy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-223-pleasure-machine.md": {
	id: "ttt-223-pleasure-machine.md";
  slug: "ttt-223-pleasure-machine";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-224-the-tip-tap-tip-detective-agency.md": {
	id: "ttt-224-the-tip-tap-tip-detective-agency.md";
  slug: "ttt-224-the-tip-tap-tip-detective-agency";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-225-stick-em-up.md": {
	id: "ttt-225-stick-em-up.md";
  slug: "ttt-225-stick-em-up";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-226-nerd-on-nerd-action.md": {
	id: "ttt-226-nerd-on-nerd-action.md";
  slug: "ttt-226-nerd-on-nerd-action";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-227-for-love-and-money.md": {
	id: "ttt-227-for-love-and-money.md";
  slug: "ttt-227-for-love-and-money";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-228-shitting-the-bed.md": {
	id: "ttt-228-shitting-the-bed.md";
  slug: "ttt-228-shitting-the-bed";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-229-spring-in-your-step.md": {
	id: "ttt-229-spring-in-your-step.md";
  slug: "ttt-229-spring-in-your-step";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-23-answer-the-question.md": {
	id: "ttt-23-answer-the-question.md";
  slug: "ttt-23-answer-the-question";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-230-baby-animals.md": {
	id: "ttt-230-baby-animals.md";
  slug: "ttt-230-baby-animals";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-231-here-come-the-judges.md": {
	id: "ttt-231-here-come-the-judges.md";
  slug: "ttt-231-here-come-the-judges";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-232-ms-dressup.md": {
	id: "ttt-232-ms-dressup.md";
  slug: "ttt-232-ms-dressup";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-233-brute-force.md": {
	id: "ttt-233-brute-force.md";
  slug: "ttt-233-brute-force";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-234-travelogue.md": {
	id: "ttt-234-travelogue.md";
  slug: "ttt-234-travelogue";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-235-disagreeable.md": {
	id: "ttt-235-disagreeable.md";
  slug: "ttt-235-disagreeable";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-236-modern-history.md": {
	id: "ttt-236-modern-history.md";
  slug: "ttt-236-modern-history";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-237-willfully-uninformed.md": {
	id: "ttt-237-willfully-uninformed.md";
  slug: "ttt-237-willfully-uninformed";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-238-from-parts-unknown.md": {
	id: "ttt-238-from-parts-unknown.md";
  slug: "ttt-238-from-parts-unknown";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-239-smile.md": {
	id: "ttt-239-smile.md";
  slug: "ttt-239-smile";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-24-soldiering-on.md": {
	id: "ttt-24-soldiering-on.md";
  slug: "ttt-24-soldiering-on";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-240-cave-dwellers.md": {
	id: "ttt-240-cave-dwellers.md";
  slug: "ttt-240-cave-dwellers";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-241-side-effects.md": {
	id: "ttt-241-side-effects.md";
  slug: "ttt-241-side-effects";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-242-dutch-angles.md": {
	id: "ttt-242-dutch-angles.md";
  slug: "ttt-242-dutch-angles";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-243-asking-for-it.md": {
	id: "ttt-243-asking-for-it.md";
  slug: "ttt-243-asking-for-it";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-244-reset.md": {
	id: "ttt-244-reset.md";
  slug: "ttt-244-reset";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-245-self-righteousness.md": {
	id: "ttt-245-self-righteousness.md";
  slug: "ttt-245-self-righteousness";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-246-shit-eating-grins.md": {
	id: "ttt-246-shit-eating-grins.md";
  slug: "ttt-246-shit-eating-grins";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-247-tits-for-everybody.md": {
	id: "ttt-247-tits-for-everybody.md";
  slug: "ttt-247-tits-for-everybody";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-248-thats-entertainment.md": {
	id: "ttt-248-thats-entertainment.md";
  slug: "ttt-248-thats-entertainment";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-249-psych-out.md": {
	id: "ttt-249-psych-out.md";
  slug: "ttt-249-psych-out";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-25-pleather-daddy.md": {
	id: "ttt-25-pleather-daddy.md";
  slug: "ttt-25-pleather-daddy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-250-rachelle-is-right.md": {
	id: "ttt-250-rachelle-is-right.md";
  slug: "ttt-250-rachelle-is-right";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-251-existential-crisis.md": {
	id: "ttt-251-existential-crisis.md";
  slug: "ttt-251-existential-crisis";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-252-common-courtesy.md": {
	id: "ttt-252-common-courtesy.md";
  slug: "ttt-252-common-courtesy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-253-does-not-compute.md": {
	id: "ttt-253-does-not-compute.md";
  slug: "ttt-253-does-not-compute";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-254-punch-in-the-face.md": {
	id: "ttt-254-punch-in-the-face.md";
  slug: "ttt-254-punch-in-the-face";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-255-lets-kiss-and-make-up.md": {
	id: "ttt-255-lets-kiss-and-make-up.md";
  slug: "ttt-255-lets-kiss-and-make-up";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-256-ik-hou-van-jou.md": {
	id: "ttt-256-ik-hou-van-jou.md";
  slug: "ttt-256-ik-hou-van-jou";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-257-teamwork.md": {
	id: "ttt-257-teamwork.md";
  slug: "ttt-257-teamwork";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-258-come-here-often.md": {
	id: "ttt-258-come-here-often.md";
  slug: "ttt-258-come-here-often";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-259-when-fantasy-meets-reality.md": {
	id: "ttt-259-when-fantasy-meets-reality.md";
  slug: "ttt-259-when-fantasy-meets-reality";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-26-bathroom-humor.md": {
	id: "ttt-26-bathroom-humor.md";
  slug: "ttt-26-bathroom-humor";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-260-out-of-order.md": {
	id: "ttt-260-out-of-order.md";
  slug: "ttt-260-out-of-order";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-261-gross-domestic.md": {
	id: "ttt-261-gross-domestic.md";
  slug: "ttt-261-gross-domestic";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-262-buddy-up.md": {
	id: "ttt-262-buddy-up.md";
  slug: "ttt-262-buddy-up";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-263-suck-it-up.md": {
	id: "ttt-263-suck-it-up.md";
  slug: "ttt-263-suck-it-up";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-264-was-it-something-i-said.md": {
	id: "ttt-264-was-it-something-i-said.md";
  slug: "ttt-264-was-it-something-i-said";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-265-imperfect-strangers.md": {
	id: "ttt-265-imperfect-strangers.md";
  slug: "ttt-265-imperfect-strangers";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-266-dick-pics.md": {
	id: "ttt-266-dick-pics.md";
  slug: "ttt-266-dick-pics";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-267-quiet-please.md": {
	id: "ttt-267-quiet-please.md";
  slug: "ttt-267-quiet-please";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-268-license-to-drive.md": {
	id: "ttt-268-license-to-drive.md";
  slug: "ttt-268-license-to-drive";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-269-were-the-fucking-best.md": {
	id: "ttt-269-were-the-fucking-best.md";
  slug: "ttt-269-were-the-fucking-best";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-27-aint-no-booty-like-a-tip-tap-tip-booty.md": {
	id: "ttt-27-aint-no-booty-like-a-tip-tap-tip-booty.md";
  slug: "ttt-27-aint-no-booty-like-a-tip-tap-tip-booty";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-270-in-ze-bum.md": {
	id: "ttt-270-in-ze-bum.md";
  slug: "ttt-270-in-ze-bum";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-271-message-received.md": {
	id: "ttt-271-message-received.md";
  slug: "ttt-271-message-received";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-272-deadly-weapons.md": {
	id: "ttt-272-deadly-weapons.md";
  slug: "ttt-272-deadly-weapons";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-273-tip-tap-tip-for-sale.md": {
	id: "ttt-273-tip-tap-tip-for-sale.md";
  slug: "ttt-273-tip-tap-tip-for-sale";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-274-chocolate-peanut-butter.md": {
	id: "ttt-274-chocolate-peanut-butter.md";
  slug: "ttt-274-chocolate-peanut-butter";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-275-animal-kingdom.md": {
	id: "ttt-275-animal-kingdom.md";
  slug: "ttt-275-animal-kingdom";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-276-automatic-lovers.md": {
	id: "ttt-276-automatic-lovers.md";
  slug: "ttt-276-automatic-lovers";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-277-eager-beaver.md": {
	id: "ttt-277-eager-beaver.md";
  slug: "ttt-277-eager-beaver";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-278-tip-tap-tip-on-ice.md": {
	id: "ttt-278-tip-tap-tip-on-ice.md";
  slug: "ttt-278-tip-tap-tip-on-ice";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-279-robosexual.md": {
	id: "ttt-279-robosexual.md";
  slug: "ttt-279-robosexual";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-28-between-love-and-hate.md": {
	id: "ttt-28-between-love-and-hate.md";
  slug: "ttt-28-between-love-and-hate";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-280-first-kiss.md": {
	id: "ttt-280-first-kiss.md";
  slug: "ttt-280-first-kiss";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-281-forced-out.md": {
	id: "ttt-281-forced-out.md";
  slug: "ttt-281-forced-out";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-282-christmas-crackers.md": {
	id: "ttt-282-christmas-crackers.md";
  slug: "ttt-282-christmas-crackers";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-283-to-boldly-come.md": {
	id: "ttt-283-to-boldly-come.md";
  slug: "ttt-283-to-boldly-come";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-284-mysteries-of-the-universe.md": {
	id: "ttt-284-mysteries-of-the-universe.md";
  slug: "ttt-284-mysteries-of-the-universe";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-285-part-of-the-problem.md": {
	id: "ttt-285-part-of-the-problem.md";
  slug: "ttt-285-part-of-the-problem";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-286-hostage-situation.md": {
	id: "ttt-286-hostage-situation.md";
  slug: "ttt-286-hostage-situation";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-287-life-imitates-art.md": {
	id: "ttt-287-life-imitates-art.md";
  slug: "ttt-287-life-imitates-art";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-288-time-to-get-alone.md": {
	id: "ttt-288-time-to-get-alone.md";
  slug: "ttt-288-time-to-get-alone";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-289-a-cork-in-the-ocean.md": {
	id: "ttt-289-a-cork-in-the-ocean.md";
  slug: "ttt-289-a-cork-in-the-ocean";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-29-ladies-night.md": {
	id: "ttt-29-ladies-night.md";
  slug: "ttt-29-ladies-night";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-290-apology-accepted.md": {
	id: "ttt-290-apology-accepted.md";
  slug: "ttt-290-apology-accepted";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-291-hug-life.md": {
	id: "ttt-291-hug-life.md";
  slug: "ttt-291-hug-life";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-292-skin-tight.md": {
	id: "ttt-292-skin-tight.md";
  slug: "ttt-292-skin-tight";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-293-culturally-insensitive.md": {
	id: "ttt-293-culturally-insensitive.md";
  slug: "ttt-293-culturally-insensitive";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-294-ignorance-is-fun.md": {
	id: "ttt-294-ignorance-is-fun.md";
  slug: "ttt-294-ignorance-is-fun";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-295-commander-pussyface.md": {
	id: "ttt-295-commander-pussyface.md";
  slug: "ttt-295-commander-pussyface";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-296-its-party-time.md": {
	id: "ttt-296-its-party-time.md";
  slug: "ttt-296-its-party-time";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-297-dirty-dishes.md": {
	id: "ttt-297-dirty-dishes.md";
  slug: "ttt-297-dirty-dishes";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-298-cheeseburger-cheerleader.md": {
	id: "ttt-298-cheeseburger-cheerleader.md";
  slug: "ttt-298-cheeseburger-cheerleader";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-299-lets-get-real.md": {
	id: "ttt-299-lets-get-real.md";
  slug: "ttt-299-lets-get-real";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-3-heart-attacks-aint-nothing-but-trouble.md": {
	id: "ttt-3-heart-attacks-aint-nothing-but-trouble.md";
  slug: "ttt-3-heart-attacks-aint-nothing-but-trouble";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-30-tip-tap-tip-je-taime.md": {
	id: "ttt-30-tip-tap-tip-je-taime.md";
  slug: "ttt-30-tip-tap-tip-je-taime";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-300-too-dumb-to-quit.md": {
	id: "ttt-300-too-dumb-to-quit.md";
  slug: "ttt-300-too-dumb-to-quit";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-301-too-easy.md": {
	id: "ttt-301-too-easy.md";
  slug: "ttt-301-too-easy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-302-faking-it.md": {
	id: "ttt-302-faking-it.md";
  slug: "ttt-302-faking-it";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-303-pick-and-choose.md": {
	id: "ttt-303-pick-and-choose.md";
  slug: "ttt-303-pick-and-choose";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-304-were-dying-up-here.md": {
	id: "ttt-304-were-dying-up-here.md";
  slug: "ttt-304-were-dying-up-here";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-305-the-shit-shack.md": {
	id: "ttt-305-the-shit-shack.md";
  slug: "ttt-305-the-shit-shack";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-306-backpack.md": {
	id: "ttt-306-backpack.md";
  slug: "ttt-306-backpack";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-307-would-you-rather.md": {
	id: "ttt-307-would-you-rather.md";
  slug: "ttt-307-would-you-rather";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-308-5-get-the-fuck-out.md": {
	id: "ttt-308-5-get-the-fuck-out.md";
  slug: "ttt-308-5-get-the-fuck-out";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-308-sweaty-palms.md": {
	id: "ttt-308-sweaty-palms.md";
  slug: "ttt-308-sweaty-palms";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-309-seventy-seventh-heaven.md": {
	id: "ttt-309-seventy-seventh-heaven.md";
  slug: "ttt-309-seventy-seventh-heaven";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-31-dinners-ready.md": {
	id: "ttt-31-dinners-ready.md";
  slug: "ttt-31-dinners-ready";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-310-close-calls-with-white-walls.md": {
	id: "ttt-310-close-calls-with-white-walls.md";
  slug: "ttt-310-close-calls-with-white-walls";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-311-storm-chasing.md": {
	id: "ttt-311-storm-chasing.md";
  slug: "ttt-311-storm-chasing";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-312-driven-to-conclusions.md": {
	id: "ttt-312-driven-to-conclusions.md";
  slug: "ttt-312-driven-to-conclusions";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-313-if-at-first-you-dont-succeed-fuck-it.md": {
	id: "ttt-313-if-at-first-you-dont-succeed-fuck-it.md";
  slug: "ttt-313-if-at-first-you-dont-succeed-fuck-it";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-314-business-casual-racism.md": {
	id: "ttt-314-business-casual-racism.md";
  slug: "ttt-314-business-casual-racism";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-315-shoot-the-shit.md": {
	id: "ttt-315-shoot-the-shit.md";
  slug: "ttt-315-shoot-the-shit";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-316-mr-car-is-a-total-pervert.md": {
	id: "ttt-316-mr-car-is-a-total-pervert.md";
  slug: "ttt-316-mr-car-is-a-total-pervert";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-317-bringing-up-baby.md": {
	id: "ttt-317-bringing-up-baby.md";
  slug: "ttt-317-bringing-up-baby";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-318-top-that.md": {
	id: "ttt-318-top-that.md";
  slug: "ttt-318-top-that";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-319-theres-a-porn-riot-goin-on.md": {
	id: "ttt-319-theres-a-porn-riot-goin-on.md";
  slug: "ttt-319-theres-a-porn-riot-goin-on";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-32-kick-to-the-balls.md": {
	id: "ttt-32-kick-to-the-balls.md";
  slug: "ttt-32-kick-to-the-balls";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-320-blow-it-out-your-ass.md": {
	id: "ttt-320-blow-it-out-your-ass.md";
  slug: "ttt-320-blow-it-out-your-ass";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-321-easy-peasy.md": {
	id: "ttt-321-easy-peasy.md";
  slug: "ttt-321-easy-peasy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-322-open-all-night.md": {
	id: "ttt-322-open-all-night.md";
  slug: "ttt-322-open-all-night";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-323-lights-out.md": {
	id: "ttt-323-lights-out.md";
  slug: "ttt-323-lights-out";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-324-wife-me.md": {
	id: "ttt-324-wife-me.md";
  slug: "ttt-324-wife-me";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-325-the-best.md": {
	id: "ttt-325-the-best.md";
  slug: "ttt-325-the-best";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-326-givers-and-takers.md": {
	id: "ttt-326-givers-and-takers.md";
  slug: "ttt-326-givers-and-takers";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-327-alley-oop.md": {
	id: "ttt-327-alley-oop.md";
  slug: "ttt-327-alley-oop";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-328-for-lack-of-trying.md": {
	id: "ttt-328-for-lack-of-trying.md";
  slug: "ttt-328-for-lack-of-trying";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-329-truckin-suckin.md": {
	id: "ttt-329-truckin-suckin.md";
  slug: "ttt-329-truckin-suckin";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-33-breaking-the-law.md": {
	id: "ttt-33-breaking-the-law.md";
  slug: "ttt-33-breaking-the-law";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-330-up-in-it.md": {
	id: "ttt-330-up-in-it.md";
  slug: "ttt-330-up-in-it";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-331-christmas-bizness.md": {
	id: "ttt-331-christmas-bizness.md";
  slug: "ttt-331-christmas-bizness";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-332-knock-knock.md": {
	id: "ttt-332-knock-knock.md";
  slug: "ttt-332-knock-knock";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-333-winter-in-canada.md": {
	id: "ttt-333-winter-in-canada.md";
  slug: "ttt-333-winter-in-canada";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-334-cuddle-up.md": {
	id: "ttt-334-cuddle-up.md";
  slug: "ttt-334-cuddle-up";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-335-watch-your-ass.md": {
	id: "ttt-335-watch-your-ass.md";
  slug: "ttt-335-watch-your-ass";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-336-high-fantasy.md": {
	id: "ttt-336-high-fantasy.md";
  slug: "ttt-336-high-fantasy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-337-a-nerd-is-a-nerd-is-a-nerd.md": {
	id: "ttt-337-a-nerd-is-a-nerd-is-a-nerd.md";
  slug: "ttt-337-a-nerd-is-a-nerd-is-a-nerd";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-338-fur-panties.md": {
	id: "ttt-338-fur-panties.md";
  slug: "ttt-338-fur-panties";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-339-frontin.md": {
	id: "ttt-339-frontin.md";
  slug: "ttt-339-frontin";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-34-little-april-bloggers.md": {
	id: "ttt-34-little-april-bloggers.md";
  slug: "ttt-34-little-april-bloggers";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-340-built-for-speed.md": {
	id: "ttt-340-built-for-speed.md";
  slug: "ttt-340-built-for-speed";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-341-hot-diggity-dog.md": {
	id: "ttt-341-hot-diggity-dog.md";
  slug: "ttt-341-hot-diggity-dog";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-342-phoning-it-in.md": {
	id: "ttt-342-phoning-it-in.md";
  slug: "ttt-342-phoning-it-in";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-343-road-rage.md": {
	id: "ttt-343-road-rage.md";
  slug: "ttt-343-road-rage";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-344-battle-of-the-sexes.md": {
	id: "ttt-344-battle-of-the-sexes.md";
  slug: "ttt-344-battle-of-the-sexes";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-345-amateur-hour.md": {
	id: "ttt-345-amateur-hour.md";
  slug: "ttt-345-amateur-hour";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-346-life-changing.md": {
	id: "ttt-346-life-changing.md";
  slug: "ttt-346-life-changing";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-347-vicious-creatures.md": {
	id: "ttt-347-vicious-creatures.md";
  slug: "ttt-347-vicious-creatures";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-348-remote-control.md": {
	id: "ttt-348-remote-control.md";
  slug: "ttt-348-remote-control";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-349-volunteers-needed.md": {
	id: "ttt-349-volunteers-needed.md";
  slug: "ttt-349-volunteers-needed";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-35-sing-your-stupid-heart-out-stupid.md": {
	id: "ttt-35-sing-your-stupid-heart-out-stupid.md";
  slug: "ttt-35-sing-your-stupid-heart-out-stupid";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-350-heavy-hitters.md": {
	id: "ttt-350-heavy-hitters.md";
  slug: "ttt-350-heavy-hitters";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-351-knobs-and-dials.md": {
	id: "ttt-351-knobs-and-dials.md";
  slug: "ttt-351-knobs-and-dials";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-352-funnel-vision.md": {
	id: "ttt-352-funnel-vision.md";
  slug: "ttt-352-funnel-vision";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-353-take-it-away.md": {
	id: "ttt-353-take-it-away.md";
  slug: "ttt-353-take-it-away";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-354-state-of-emergency.md": {
	id: "ttt-354-state-of-emergency.md";
  slug: "ttt-354-state-of-emergency";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-355-come-again.md": {
	id: "ttt-355-come-again.md";
  slug: "ttt-355-come-again";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-356-take-it-easy.md": {
	id: "ttt-356-take-it-easy.md";
  slug: "ttt-356-take-it-easy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-357-careful-consideration.md": {
	id: "ttt-357-careful-consideration.md";
  slug: "ttt-357-careful-consideration";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-358-alert-the-authorities.md": {
	id: "ttt-358-alert-the-authorities.md";
  slug: "ttt-358-alert-the-authorities";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-358-private-property.md": {
	id: "ttt-358-private-property.md";
  slug: "ttt-358-private-property";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-36-smoke-em-if-you-got-em.md": {
	id: "ttt-36-smoke-em-if-you-got-em.md";
  slug: "ttt-36-smoke-em-if-you-got-em";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-360-meet-and-greet.md": {
	id: "ttt-360-meet-and-greet.md";
  slug: "ttt-360-meet-and-greet";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-361-best-podcast-ever.md": {
	id: "ttt-361-best-podcast-ever.md";
  slug: "ttt-361-best-podcast-ever";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-362-rolling-thunder.md": {
	id: "ttt-362-rolling-thunder.md";
  slug: "ttt-362-rolling-thunder";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-363-tough-ticket-tip-tap-tip.md": {
	id: "ttt-363-tough-ticket-tip-tap-tip.md";
  slug: "ttt-363-tough-ticket-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-364-cut-loose.md": {
	id: "ttt-364-cut-loose.md";
  slug: "ttt-364-cut-loose";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-365-fuck-it.md": {
	id: "ttt-365-fuck-it.md";
  slug: "ttt-365-fuck-it";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-366-day-every-day.md": {
	id: "ttt-366-day-every-day.md";
  slug: "ttt-366-day-every-day";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-367-dangle-carrot.md": {
	id: "ttt-367-dangle-carrot.md";
  slug: "ttt-367-dangle-carrot";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-368-balls-wall.md": {
	id: "ttt-368-balls-wall.md";
  slug: "ttt-368-balls-wall";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-369-getaway.md": {
	id: "ttt-369-getaway.md";
  slug: "ttt-369-getaway";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-37-workplace-violence.md": {
	id: "ttt-37-workplace-violence.md";
  slug: "ttt-37-workplace-violence";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-370-tag-team.md": {
	id: "ttt-370-tag-team.md";
  slug: "ttt-370-tag-team";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-371-christmas-miracle.md": {
	id: "ttt-371-christmas-miracle.md";
  slug: "ttt-371-christmas-miracle";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-372-nerding.md": {
	id: "ttt-372-nerding.md";
  slug: "ttt-372-nerding";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-373-give-cheeses.md": {
	id: "ttt-373-give-cheeses.md";
  slug: "ttt-373-give-cheeses";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-374-tip-tap-tip-talent.md": {
	id: "ttt-374-tip-tap-tip-talent.md";
  slug: "ttt-374-tip-tap-tip-talent";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-375-gold-diamonds.md": {
	id: "ttt-375-gold-diamonds.md";
  slug: "ttt-375-gold-diamonds";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-376-neighbourhood-watch.md": {
	id: "ttt-376-neighbourhood-watch.md";
  slug: "ttt-376-neighbourhood-watch";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-377-beyond-valley-tip-tap-tip.md": {
	id: "ttt-377-beyond-valley-tip-tap-tip.md";
  slug: "ttt-377-beyond-valley-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-378-black-new-black.md": {
	id: "ttt-378-black-new-black.md";
  slug: "ttt-378-black-new-black";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-379-replaceable-parts.md": {
	id: "ttt-379-replaceable-parts.md";
  slug: "ttt-379-replaceable-parts";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-38-whos-nailin-tip-tap-tip.md": {
	id: "ttt-38-whos-nailin-tip-tap-tip.md";
  slug: "ttt-38-whos-nailin-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-380-busy-awesome.md": {
	id: "ttt-380-busy-awesome.md";
  slug: "ttt-380-busy-awesome";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-381-road-hogs.md": {
	id: "ttt-381-road-hogs.md";
  slug: "ttt-381-road-hogs";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-382-minimum-overdrive.md": {
	id: "ttt-382-minimum-overdrive.md";
  slug: "ttt-382-minimum-overdrive";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-383-miracle-makers.md": {
	id: "ttt-383-miracle-makers.md";
  slug: "ttt-383-miracle-makers";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-384-capital-f-u-n.md": {
	id: "ttt-384-capital-f-u-n.md";
  slug: "ttt-384-capital-f-u-n";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-385-nous-ne-somme-pas-des-anges.md": {
	id: "ttt-385-nous-ne-somme-pas-des-anges.md";
  slug: "ttt-385-nous-ne-somme-pas-des-anges";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-386-personal-opionions.md": {
	id: "ttt-386-personal-opionions.md";
  slug: "ttt-386-personal-opionions";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-387-knock-offs.md": {
	id: "ttt-387-knock-offs.md";
  slug: "ttt-387-knock-offs";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-388-hot-tubbin.md": {
	id: "ttt-388-hot-tubbin.md";
  slug: "ttt-388-hot-tubbin";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-389-shoot-em.md": {
	id: "ttt-389-shoot-em.md";
  slug: "ttt-389-shoot-em";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-39-all-systems-lactivated.md": {
	id: "ttt-39-all-systems-lactivated.md";
  slug: "ttt-39-all-systems-lactivated";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-390-self-destruct.md": {
	id: "ttt-390-self-destruct.md";
  slug: "ttt-390-self-destruct";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-391-shove-face.md": {
	id: "ttt-391-shove-face.md";
  slug: "ttt-391-shove-face";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-392-never-come-back.md": {
	id: "ttt-392-never-come-back.md";
  slug: "ttt-392-never-come-back";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-393-lock-doors.md": {
	id: "ttt-393-lock-doors.md";
  slug: "ttt-393-lock-doors";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-394-ladies.md": {
	id: "ttt-394-ladies.md";
  slug: "ttt-394-ladies";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-395-call-response.md": {
	id: "ttt-395-call-response.md";
  slug: "ttt-395-call-response";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-396-sharing-caring.md": {
	id: "ttt-396-sharing-caring.md";
  slug: "ttt-396-sharing-caring";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-397-quiet-set.md": {
	id: "ttt-397-quiet-set.md";
  slug: "ttt-397-quiet-set";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-398-ladies-vs-gentlemen.md": {
	id: "ttt-398-ladies-vs-gentlemen.md";
  slug: "ttt-398-ladies-vs-gentlemen";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-399-ski-jacket-required.md": {
	id: "ttt-399-ski-jacket-required.md";
  slug: "ttt-399-ski-jacket-required";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-4-live-from-the-stampede.md": {
	id: "ttt-4-live-from-the-stampede.md";
  slug: "ttt-4-live-from-the-stampede";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-40-homemaking.md": {
	id: "ttt-40-homemaking.md";
  slug: "ttt-40-homemaking";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-400-holiday-road.md": {
	id: "ttt-400-holiday-road.md";
  slug: "ttt-400-holiday-road";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-401-flipping-script.md": {
	id: "ttt-401-flipping-script.md";
  slug: "ttt-401-flipping-script";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-402-family-friendly.md": {
	id: "ttt-402-family-friendly.md";
  slug: "ttt-402-family-friendly";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-403-stepping.md": {
	id: "ttt-403-stepping.md";
  slug: "ttt-403-stepping";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-404-tag-youre.md": {
	id: "ttt-404-tag-youre.md";
  slug: "ttt-404-tag-youre";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-405-dream-date.md": {
	id: "ttt-405-dream-date.md";
  slug: "ttt-405-dream-date";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-406-last-chance-dance.md": {
	id: "ttt-406-last-chance-dance.md";
  slug: "ttt-406-last-chance-dance";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-407-hired-help.md": {
	id: "ttt-407-hired-help.md";
  slug: "ttt-407-hired-help";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-408-not-cool-enough-for-school.md": {
	id: "ttt-408-not-cool-enough-for-school.md";
  slug: "ttt-408-not-cool-enough-for-school";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-409-how-could-we-be-wrong.md": {
	id: "ttt-409-how-could-we-be-wrong.md";
  slug: "ttt-409-how-could-we-be-wrong";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-41-sexiest-podcast-alive-2008.md": {
	id: "ttt-41-sexiest-podcast-alive-2008.md";
  slug: "ttt-41-sexiest-podcast-alive-2008";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-410-plastic-fantastic.md": {
	id: "ttt-410-plastic-fantastic.md";
  slug: "ttt-410-plastic-fantastic";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-411-robophobic.md": {
	id: "ttt-411-robophobic.md";
  slug: "ttt-411-robophobic";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-412-art-and-crafts.md": {
	id: "ttt-412-art-and-crafts.md";
  slug: "ttt-412-art-and-crafts";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-413-car-crazy.md": {
	id: "ttt-413-car-crazy.md";
  slug: "ttt-413-car-crazy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-414-internet-hoggers.md": {
	id: "ttt-414-internet-hoggers.md";
  slug: "ttt-414-internet-hoggers";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-415-i-dont-know-how-they-do-it.md": {
	id: "ttt-415-i-dont-know-how-they-do-it.md";
  slug: "ttt-415-i-dont-know-how-they-do-it";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-416-better-than-bad.md": {
	id: "ttt-416-better-than-bad.md";
  slug: "ttt-416-better-than-bad";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-417-wrong-party.md": {
	id: "ttt-417-wrong-party.md";
  slug: "ttt-417-wrong-party";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-418-bonerific.md": {
	id: "ttt-418-bonerific.md";
  slug: "ttt-418-bonerific";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-419-smoothies-are-people.md": {
	id: "ttt-419-smoothies-are-people.md";
  slug: "ttt-419-smoothies-are-people";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-42-two-and-a-half-podcasts.md": {
	id: "ttt-42-two-and-a-half-podcasts.md";
  slug: "ttt-42-two-and-a-half-podcasts";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-420-friendly-neighbourhood-douchebag.md": {
	id: "ttt-420-friendly-neighbourhood-douchebag.md";
  slug: "ttt-420-friendly-neighbourhood-douchebag";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-421-enough-already.md": {
	id: "ttt-421-enough-already.md";
  slug: "ttt-421-enough-already";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-422-move-it.md": {
	id: "ttt-422-move-it.md";
  slug: "ttt-422-move-it";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-423-on-the-run.md": {
	id: "ttt-423-on-the-run.md";
  slug: "ttt-423-on-the-run";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-424-buy-sell.md": {
	id: "ttt-424-buy-sell.md";
  slug: "ttt-424-buy-sell";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-424-cut-music.md": {
	id: "ttt-424-cut-music.md";
  slug: "ttt-424-cut-music";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-425-pop-quiz.md": {
	id: "ttt-425-pop-quiz.md";
  slug: "ttt-425-pop-quiz";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-426-hey-everyone-its-christmas.md": {
	id: "ttt-426-hey-everyone-its-christmas.md";
  slug: "ttt-426-hey-everyone-its-christmas";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-427-balancing-act.md": {
	id: "ttt-427-balancing-act.md";
  slug: "ttt-427-balancing-act";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-428-hot-moms.md": {
	id: "ttt-428-hot-moms.md";
  slug: "ttt-428-hot-moms";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-429-new-adventures.md": {
	id: "ttt-429-new-adventures.md";
  slug: "ttt-429-new-adventures";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-43-fight-fight-fight.md": {
	id: "ttt-43-fight-fight-fight.md";
  slug: "ttt-43-fight-fight-fight";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-430-odd-jobs.md": {
	id: "ttt-430-odd-jobs.md";
  slug: "ttt-430-odd-jobs";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-431-soldiers-fun.md": {
	id: "ttt-431-soldiers-fun.md";
  slug: "ttt-431-soldiers-fun";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-432-strike-it-up.md": {
	id: "ttt-432-strike-it-up.md";
  slug: "ttt-432-strike-it-up";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-433-ready-wear.md": {
	id: "ttt-433-ready-wear.md";
  slug: "ttt-433-ready-wear";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-435-vintage-violence.md": {
	id: "ttt-435-vintage-violence.md";
  slug: "ttt-435-vintage-violence";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-436-animal-husbandry.md": {
	id: "ttt-436-animal-husbandry.md";
  slug: "ttt-436-animal-husbandry";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-437-make-feel.md": {
	id: "ttt-437-make-feel.md";
  slug: "ttt-437-make-feel";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-438-fit-tied.md": {
	id: "ttt-438-fit-tied.md";
  slug: "ttt-438-fit-tied";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-439-5-hack-job.md": {
	id: "ttt-439-5-hack-job.md";
  slug: "ttt-439-5-hack-job";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-439-winging.md": {
	id: "ttt-439-winging.md";
  slug: "ttt-439-winging";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-44-indoors-or-outdoors.md": {
	id: "ttt-44-indoors-or-outdoors.md";
  slug: "ttt-44-indoors-or-outdoors";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-440-back-brown.md": {
	id: "ttt-440-back-brown.md";
  slug: "ttt-440-back-brown";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-441-love-begins.md": {
	id: "ttt-441-love-begins.md";
  slug: "ttt-441-love-begins";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-442-feel-good.md": {
	id: "ttt-442-feel-good.md";
  slug: "ttt-442-feel-good";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-443-number-one-podcast-heaven.md": {
	id: "ttt-443-number-one-podcast-heaven.md";
  slug: "ttt-443-number-one-podcast-heaven";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-444-5-summah.md": {
	id: "ttt-444-5-summah.md";
  slug: "ttt-444-5-summah";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-444-instant-winner.md": {
	id: "ttt-444-instant-winner.md";
  slug: "ttt-444-instant-winner";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-445-cruisin.md": {
	id: "ttt-445-cruisin.md";
  slug: "ttt-445-cruisin";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-446-nice-buns.md": {
	id: "ttt-446-nice-buns.md";
  slug: "ttt-446-nice-buns";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-447-checking.md": {
	id: "ttt-447-checking.md";
  slug: "ttt-447-checking";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-448-running-love.md": {
	id: "ttt-448-running-love.md";
  slug: "ttt-448-running-love";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-449-punching-and-kicking.md": {
	id: "ttt-449-punching-and-kicking.md";
  slug: "ttt-449-punching-and-kicking";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-45-what-would-geddy-lee-do.md": {
	id: "ttt-45-what-would-geddy-lee-do.md";
  slug: "ttt-45-what-would-geddy-lee-do";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-450-president-tip-tap-tip.md": {
	id: "ttt-450-president-tip-tap-tip.md";
  slug: "ttt-450-president-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-451-soft-entry.md": {
	id: "ttt-451-soft-entry.md";
  slug: "ttt-451-soft-entry";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-452-hot-talk.md": {
	id: "ttt-452-hot-talk.md";
  slug: "ttt-452-hot-talk";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-453-hold-on.md": {
	id: "ttt-453-hold-on.md";
  slug: "ttt-453-hold-on";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-454-life-lessons.md": {
	id: "ttt-454-life-lessons.md";
  slug: "ttt-454-life-lessons";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-455-left-behind.md": {
	id: "ttt-455-left-behind.md";
  slug: "ttt-455-left-behind";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-456-clown-car.md": {
	id: "ttt-456-clown-car.md";
  slug: "ttt-456-clown-car";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-457-mondo-tip-tap-tip.md": {
	id: "ttt-457-mondo-tip-tap-tip.md";
  slug: "ttt-457-mondo-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-458-temperatures-rising.md": {
	id: "ttt-458-temperatures-rising.md";
  slug: "ttt-458-temperatures-rising";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-459-1-zero-calorie-podcast.md": {
	id: "ttt-459-1-zero-calorie-podcast.md";
  slug: "ttt-459-1-zero-calorie-podcast";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-459-pregnant-pause.md": {
	id: "ttt-459-pregnant-pause.md";
  slug: "ttt-459-pregnant-pause";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-46-crying-our-eyes-out.md": {
	id: "ttt-46-crying-our-eyes-out.md";
  slug: "ttt-46-crying-our-eyes-out";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-460-second-time-around.md": {
	id: "ttt-460-second-time-around.md";
  slug: "ttt-460-second-time-around";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-461-team-tip-tap-tip.md": {
	id: "ttt-461-team-tip-tap-tip.md";
  slug: "ttt-461-team-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-462-first-date.md": {
	id: "ttt-462-first-date.md";
  slug: "ttt-462-first-date";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-463-a-glass-of-champagne.md": {
	id: "ttt-463-a-glass-of-champagne.md";
  slug: "ttt-463-a-glass-of-champagne";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-464-leather-rebels.md": {
	id: "ttt-464-leather-rebels.md";
  slug: "ttt-464-leather-rebels";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-465-fixer-uppers.md": {
	id: "ttt-465-fixer-uppers.md";
  slug: "ttt-465-fixer-uppers";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-466-nothing-personal.md": {
	id: "ttt-466-nothing-personal.md";
  slug: "ttt-466-nothing-personal";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-467-its-okay-to-cry.md": {
	id: "ttt-467-its-okay-to-cry.md";
  slug: "ttt-467-its-okay-to-cry";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-468-touch-and-go.md": {
	id: "ttt-468-touch-and-go.md";
  slug: "ttt-468-touch-and-go";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-469-sound-alarm.md": {
	id: "ttt-469-sound-alarm.md";
  slug: "ttt-469-sound-alarm";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-47-baby-its-cold-outside.md": {
	id: "ttt-47-baby-its-cold-outside.md";
  slug: "ttt-47-baby-its-cold-outside";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-470-sun-dont-shine.md": {
	id: "ttt-470-sun-dont-shine.md";
  slug: "ttt-470-sun-dont-shine";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-471-cause-concern.md": {
	id: "ttt-471-cause-concern.md";
  slug: "ttt-471-cause-concern";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-472-get-sucked.md": {
	id: "ttt-472-get-sucked.md";
  slug: "ttt-472-get-sucked";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-473-tip-tap-tip-morning-zoo.md": {
	id: "ttt-473-tip-tap-tip-morning-zoo.md";
  slug: "ttt-473-tip-tap-tip-morning-zoo";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-474-hose.md": {
	id: "ttt-474-hose.md";
  slug: "ttt-474-hose";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-475-making-up-all-over-the-place.md": {
	id: "ttt-475-making-up-all-over-the-place.md";
  slug: "ttt-475-making-up-all-over-the-place";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-476-strap-on.md": {
	id: "ttt-476-strap-on.md";
  slug: "ttt-476-strap-on";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-477-self-control.md": {
	id: "ttt-477-self-control.md";
  slug: "ttt-477-self-control";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-478-professional-jealousy.md": {
	id: "ttt-478-professional-jealousy.md";
  slug: "ttt-478-professional-jealousy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-479-kids-these-days.md": {
	id: "ttt-479-kids-these-days.md";
  slug: "ttt-479-kids-these-days";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-48-swordplay.md": {
	id: "ttt-48-swordplay.md";
  slug: "ttt-48-swordplay";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-480-sexy-cool.md": {
	id: "ttt-480-sexy-cool.md";
  slug: "ttt-480-sexy-cool";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-481-oh-man-the-future.md": {
	id: "ttt-481-oh-man-the-future.md";
  slug: "ttt-481-oh-man-the-future";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-482-career-opportunities.md": {
	id: "ttt-482-career-opportunities.md";
  slug: "ttt-482-career-opportunities";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-483-that-happy-feeling.md": {
	id: "ttt-483-that-happy-feeling.md";
  slug: "ttt-483-that-happy-feeling";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-484-pardon-the-interruption.md": {
	id: "ttt-484-pardon-the-interruption.md";
  slug: "ttt-484-pardon-the-interruption";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-485-background-noise.md": {
	id: "ttt-485-background-noise.md";
  slug: "ttt-485-background-noise";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-486-infinitely-late-at-night.md": {
	id: "ttt-486-infinitely-late-at-night.md";
  slug: "ttt-486-infinitely-late-at-night";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-487-previous-engagements.md": {
	id: "ttt-487-previous-engagements.md";
  slug: "ttt-487-previous-engagements";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-488-i-love-your-ass.md": {
	id: "ttt-488-i-love-your-ass.md";
  slug: "ttt-488-i-love-your-ass";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-489-lower-your-voice.md": {
	id: "ttt-489-lower-your-voice.md";
  slug: "ttt-489-lower-your-voice";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-49-pancakes.md": {
	id: "ttt-49-pancakes.md";
  slug: "ttt-49-pancakes";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-490-we-care.md": {
	id: "ttt-490-we-care.md";
  slug: "ttt-490-we-care";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-491-one-sided-relationship.md": {
	id: "ttt-491-one-sided-relationship.md";
  slug: "ttt-491-one-sided-relationship";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-492-emotionally-fragile.md": {
	id: "ttt-492-emotionally-fragile.md";
  slug: "ttt-492-emotionally-fragile";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-493-key-takeaways.md": {
	id: "ttt-493-key-takeaways.md";
  slug: "ttt-493-key-takeaways";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-494-killing-it.md": {
	id: "ttt-494-killing-it.md";
  slug: "ttt-494-killing-it";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-495-downhill-slide.md": {
	id: "ttt-495-downhill-slide.md";
  slug: "ttt-495-downhill-slide";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-496-fundamental-differences.md": {
	id: "ttt-496-fundamental-differences.md";
  slug: "ttt-496-fundamental-differences";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-497-adults-only.md": {
	id: "ttt-497-adults-only.md";
  slug: "ttt-497-adults-only";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-498-novel-approach.md": {
	id: "ttt-498-novel-approach.md";
  slug: "ttt-498-novel-approach";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-499-ooh-la-la.md": {
	id: "ttt-499-ooh-la-la.md";
  slug: "ttt-499-ooh-la-la";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-5-cleanse-me-up-cleanse-me-down.md": {
	id: "ttt-5-cleanse-me-up-cleanse-me-down.md";
  slug: "ttt-5-cleanse-me-up-cleanse-me-down";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-50-hypothetically-speaking.md": {
	id: "ttt-50-hypothetically-speaking.md";
  slug: "ttt-50-hypothetically-speaking";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-500-controversy.md": {
	id: "ttt-500-controversy.md";
  slug: "ttt-500-controversy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-501-stop-thief.md": {
	id: "ttt-501-stop-thief.md";
  slug: "ttt-501-stop-thief";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-502-smash-the-system.md": {
	id: "ttt-502-smash-the-system.md";
  slug: "ttt-502-smash-the-system";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-503-turn-of-phrase.md": {
	id: "ttt-503-turn-of-phrase.md";
  slug: "ttt-503-turn-of-phrase";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-504-mother-of-two.md": {
	id: "ttt-504-mother-of-two.md";
  slug: "ttt-504-mother-of-two";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-505-makeover-madness.md": {
	id: "ttt-505-makeover-madness.md";
  slug: "ttt-505-makeover-madness";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-506-5-keeping-it-together.md": {
	id: "ttt-506-5-keeping-it-together.md";
  slug: "ttt-506-5-keeping-it-together";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-506-spending-habits.md": {
	id: "ttt-506-spending-habits.md";
  slug: "ttt-506-spending-habits";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-507-for-the-love-of-the-show.md": {
	id: "ttt-507-for-the-love-of-the-show.md";
  slug: "ttt-507-for-the-love-of-the-show";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-508-old-people-problems.md": {
	id: "ttt-508-old-people-problems.md";
  slug: "ttt-508-old-people-problems";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-509-deep-breathing.md": {
	id: "ttt-509-deep-breathing.md";
  slug: "ttt-509-deep-breathing";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-51-from-bulgaria-with-love.md": {
	id: "ttt-51-from-bulgaria-with-love.md";
  slug: "ttt-51-from-bulgaria-with-love";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-510-descent-into-chaos.md": {
	id: "ttt-510-descent-into-chaos.md";
  slug: "ttt-510-descent-into-chaos";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-511-friends-to-the-end.md": {
	id: "ttt-511-friends-to-the-end.md";
  slug: "ttt-511-friends-to-the-end";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-512-cut-run.md": {
	id: "ttt-512-cut-run.md";
  slug: "ttt-512-cut-run";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-513-kick-up-your-heels.md": {
	id: "ttt-513-kick-up-your-heels.md";
  slug: "ttt-513-kick-up-your-heels";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-514-weirded-out.md": {
	id: "ttt-514-weirded-out.md";
  slug: "ttt-514-weirded-out";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-515-the-carnival-is-over.md": {
	id: "ttt-515-the-carnival-is-over.md";
  slug: "ttt-515-the-carnival-is-over";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-516-all-you-can-eat.md": {
	id: "ttt-516-all-you-can-eat.md";
  slug: "ttt-516-all-you-can-eat";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-517-how-does-your-garden-grow.md": {
	id: "ttt-517-how-does-your-garden-grow.md";
  slug: "ttt-517-how-does-your-garden-grow";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-518-podcast-verite.md": {
	id: "ttt-518-podcast-verite.md";
  slug: "ttt-518-podcast-verite";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-519-pizza-party.md": {
	id: "ttt-519-pizza-party.md";
  slug: "ttt-519-pizza-party";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-52-mystic-pizza-cake.md": {
	id: "ttt-52-mystic-pizza-cake.md";
  slug: "ttt-52-mystic-pizza-cake";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-520-eric-rachelle-go-boating.md": {
	id: "ttt-520-eric-rachelle-go-boating.md";
  slug: "ttt-520-eric-rachelle-go-boating";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-521-according-to-plan.md": {
	id: "ttt-521-according-to-plan.md";
  slug: "ttt-521-according-to-plan";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-522-building-blocks.md": {
	id: "ttt-522-building-blocks.md";
  slug: "ttt-522-building-blocks";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-523-anatomically-incorrect.md": {
	id: "ttt-523-anatomically-incorrect.md";
  slug: "ttt-523-anatomically-incorrect";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-524-push-of-button.md": {
	id: "ttt-524-push-of-button.md";
  slug: "ttt-524-push-of-button";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-525-take-it-to-the-limit.md": {
	id: "ttt-525-take-it-to-the-limit.md";
  slug: "ttt-525-take-it-to-the-limit";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-526-slow-to-learn.md": {
	id: "ttt-526-slow-to-learn.md";
  slug: "ttt-526-slow-to-learn";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-527-surprise.md": {
	id: "ttt-527-surprise.md";
  slug: "ttt-527-surprise";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-528-no-hard-feelings.md": {
	id: "ttt-528-no-hard-feelings.md";
  slug: "ttt-528-no-hard-feelings";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-529-just-like-that.md": {
	id: "ttt-529-just-like-that.md";
  slug: "ttt-529-just-like-that";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-53-lovemakers.md": {
	id: "ttt-53-lovemakers.md";
  slug: "ttt-53-lovemakers";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-530-pants-optional.md": {
	id: "ttt-530-pants-optional.md";
  slug: "ttt-530-pants-optional";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-531-hot-dog.md": {
	id: "ttt-531-hot-dog.md";
  slug: "ttt-531-hot-dog";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-532-spooky-ooky.md": {
	id: "ttt-532-spooky-ooky.md";
  slug: "ttt-532-spooky-ooky";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-533-art-for-arts-sake.md": {
	id: "ttt-533-art-for-arts-sake.md";
  slug: "ttt-533-art-for-arts-sake";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-534-tip-tap-tip-to-go.md": {
	id: "ttt-534-tip-tap-tip-to-go.md";
  slug: "ttt-534-tip-tap-tip-to-go";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-535-free-to-choose.md": {
	id: "ttt-535-free-to-choose.md";
  slug: "ttt-535-free-to-choose";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-536-quitters-always-win.md": {
	id: "ttt-536-quitters-always-win.md";
  slug: "ttt-536-quitters-always-win";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-537-from-out-of-nowhere.md": {
	id: "ttt-537-from-out-of-nowhere.md";
  slug: "ttt-537-from-out-of-nowhere";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-538-bored-to-tears.md": {
	id: "ttt-538-bored-to-tears.md";
  slug: "ttt-538-bored-to-tears";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-539-mixed-bag.md": {
	id: "ttt-539-mixed-bag.md";
  slug: "ttt-539-mixed-bag";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-54-mild-roses.md": {
	id: "ttt-54-mild-roses.md";
  slug: "ttt-54-mild-roses";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-540-candy-corned.md": {
	id: "ttt-540-candy-corned.md";
  slug: "ttt-540-candy-corned";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-541-imagine-if.md": {
	id: "ttt-541-imagine-if.md";
  slug: "ttt-541-imagine-if";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-542-how-to-be-popular.md": {
	id: "ttt-542-how-to-be-popular.md";
  slug: "ttt-542-how-to-be-popular";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-543-dare-to-dream.md": {
	id: "ttt-543-dare-to-dream.md";
  slug: "ttt-543-dare-to-dream";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-544-fixer-upper.md": {
	id: "ttt-544-fixer-upper.md";
  slug: "ttt-544-fixer-upper";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-545-barbarism-begins-at-home.md": {
	id: "ttt-545-barbarism-begins-at-home.md";
  slug: "ttt-545-barbarism-begins-at-home";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-546-space-is-the-place.md": {
	id: "ttt-546-space-is-the-place.md";
  slug: "ttt-546-space-is-the-place";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-547-explain-it-to-me-again.md": {
	id: "ttt-547-explain-it-to-me-again.md";
  slug: "ttt-547-explain-it-to-me-again";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-548-smashing-time.md": {
	id: "ttt-548-smashing-time.md";
  slug: "ttt-548-smashing-time";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-549-the-tip-tap-tip-parable.md": {
	id: "ttt-549-the-tip-tap-tip-parable.md";
  slug: "ttt-549-the-tip-tap-tip-parable";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-55-the-good-ship-tip-tap-tip.md": {
	id: "ttt-55-the-good-ship-tip-tap-tip.md";
  slug: "ttt-55-the-good-ship-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-550-against-the-rules.md": {
	id: "ttt-550-against-the-rules.md";
  slug: "ttt-550-against-the-rules";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-551-connecting-the-dots.md": {
	id: "ttt-551-connecting-the-dots.md";
  slug: "ttt-551-connecting-the-dots";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-552-scream-and-shout.md": {
	id: "ttt-552-scream-and-shout.md";
  slug: "ttt-552-scream-and-shout";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-553-buddy.md": {
	id: "ttt-553-buddy.md";
  slug: "ttt-553-buddy";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-554-wishful-thinking.md": {
	id: "ttt-554-wishful-thinking.md";
  slug: "ttt-554-wishful-thinking";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-555-interchangeable-parts.md": {
	id: "ttt-555-interchangeable-parts.md";
  slug: "ttt-555-interchangeable-parts";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-556-talk-amongst-yourselves.md": {
	id: "ttt-556-talk-amongst-yourselves.md";
  slug: "ttt-556-talk-amongst-yourselves";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-557-around-the-world.md": {
	id: "ttt-557-around-the-world.md";
  slug: "ttt-557-around-the-world";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-558-play-dates.md": {
	id: "ttt-558-play-dates.md";
  slug: "ttt-558-play-dates";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-559-research-development.md": {
	id: "ttt-559-research-development.md";
  slug: "ttt-559-research-development";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-56-ring-ring.md": {
	id: "ttt-56-ring-ring.md";
  slug: "ttt-56-ring-ring";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-560-grinding-gears.md": {
	id: "ttt-560-grinding-gears.md";
  slug: "ttt-560-grinding-gears";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-561-get-on-the-bus.md": {
	id: "ttt-561-get-on-the-bus.md";
  slug: "ttt-561-get-on-the-bus";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-562-its-alive.md": {
	id: "ttt-562-its-alive.md";
  slug: "ttt-562-its-alive";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-563-bangaranga-your-head.md": {
	id: "ttt-563-bangaranga-your-head.md";
  slug: "ttt-563-bangaranga-your-head";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-57-fashion-cookie.md": {
	id: "ttt-57-fashion-cookie.md";
  slug: "ttt-57-fashion-cookie";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-58-green-is-the-color.md": {
	id: "ttt-58-green-is-the-color.md";
  slug: "ttt-58-green-is-the-color";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-59-were-done-professionally.md": {
	id: "ttt-59-were-done-professionally.md";
  slug: "ttt-59-were-done-professionally";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-6-unicorn-lee-roth.md": {
	id: "ttt-6-unicorn-lee-roth.md";
  slug: "ttt-6-unicorn-lee-roth";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-60-pret-a-porthole.md": {
	id: "ttt-60-pret-a-porthole.md";
  slug: "ttt-60-pret-a-porthole";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-61-guess-whos-coming-to-dinner.md": {
	id: "ttt-61-guess-whos-coming-to-dinner.md";
  slug: "ttt-61-guess-whos-coming-to-dinner";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-62-world-famous.md": {
	id: "ttt-62-world-famous.md";
  slug: "ttt-62-world-famous";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-63-amateur-hour.md": {
	id: "ttt-63-amateur-hour.md";
  slug: "ttt-63-amateur-hour";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-64-losing-our-shit.md": {
	id: "ttt-64-losing-our-shit.md";
  slug: "ttt-64-losing-our-shit";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-65-the-feric-and-cachelle-show.md": {
	id: "ttt-65-the-feric-and-cachelle-show.md";
  slug: "ttt-65-the-feric-and-cachelle-show";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-66-expert-opinions.md": {
	id: "ttt-66-expert-opinions.md";
  slug: "ttt-66-expert-opinions";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-67-buy-it-now-buy-it-now.md": {
	id: "ttt-67-buy-it-now-buy-it-now.md";
  slug: "ttt-67-buy-it-now-buy-it-now";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-68-be-nice.md": {
	id: "ttt-68-be-nice.md";
  slug: "ttt-68-be-nice";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-69-the-entertainers.md": {
	id: "ttt-69-the-entertainers.md";
  slug: "ttt-69-the-entertainers";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-7-weekendweak-end.md": {
	id: "ttt-7-weekendweak-end.md";
  slug: "ttt-7-weekendweak-end";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-70-catching-up-with-tip-tap-tip.md": {
	id: "ttt-70-catching-up-with-tip-tap-tip.md";
  slug: "ttt-70-catching-up-with-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-71-try-harder.md": {
	id: "ttt-71-try-harder.md";
  slug: "ttt-71-try-harder";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-72-news-to-us.md": {
	id: "ttt-72-news-to-us.md";
  slug: "ttt-72-news-to-us";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-73-planning-ahead.md": {
	id: "ttt-73-planning-ahead.md";
  slug: "ttt-73-planning-ahead";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-74-take-out.md": {
	id: "ttt-74-take-out.md";
  slug: "ttt-74-take-out";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-75-tip-tap-tip-alive.md": {
	id: "ttt-75-tip-tap-tip-alive.md";
  slug: "ttt-75-tip-tap-tip-alive";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-76-tip-tap-topless.md": {
	id: "ttt-76-tip-tap-topless.md";
  slug: "ttt-76-tip-tap-topless";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-77-say-my-name.md": {
	id: "ttt-77-say-my-name.md";
  slug: "ttt-77-say-my-name";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-78-pod-curious.md": {
	id: "ttt-78-pod-curious.md";
  slug: "ttt-78-pod-curious";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-79-back-to-school.md": {
	id: "ttt-79-back-to-school.md";
  slug: "ttt-79-back-to-school";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-8-the-tip-tap-tip-code.md": {
	id: "ttt-8-the-tip-tap-tip-code.md";
  slug: "ttt-8-the-tip-tap-tip-code";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-80-that-happy-feeling.md": {
	id: "ttt-80-that-happy-feeling.md";
  slug: "ttt-80-that-happy-feeling";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-81-looking-for-love.md": {
	id: "ttt-81-looking-for-love.md";
  slug: "ttt-81-looking-for-love";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-82-tip-tap-tip-power.md": {
	id: "ttt-82-tip-tap-tip-power.md";
  slug: "ttt-82-tip-tap-tip-power";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-83-hidden-talents.md": {
	id: "ttt-83-hidden-talents.md";
  slug: "ttt-83-hidden-talents";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-84-question-answer.md": {
	id: "ttt-84-question-answer.md";
  slug: "ttt-84-question-answer";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-85-rachelleland-vs-ericistan.md": {
	id: "ttt-85-rachelleland-vs-ericistan.md";
  slug: "ttt-85-rachelleland-vs-ericistan";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-86-parenting-advice.md": {
	id: "ttt-86-parenting-advice.md";
  slug: "ttt-86-parenting-advice";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-87-totally-heartless.md": {
	id: "ttt-87-totally-heartless.md";
  slug: "ttt-87-totally-heartless";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-88-peeling-it-and-feeling-it.md": {
	id: "ttt-88-peeling-it-and-feeling-it.md";
  slug: "ttt-88-peeling-it-and-feeling-it";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-89-file-under-attractive.md": {
	id: "ttt-89-file-under-attractive.md";
  slug: "ttt-89-file-under-attractive";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-9-bear-hugz.md": {
	id: "ttt-9-bear-hugz.md";
  slug: "ttt-9-bear-hugz";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-91-thieves-like-us.md": {
	id: "ttt-91-thieves-like-us.md";
  slug: "ttt-91-thieves-like-us";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-92-the-melting-pot.md": {
	id: "ttt-92-the-melting-pot.md";
  slug: "ttt-92-the-melting-pot";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-93-mr-mrs-tip-tap-tip.md": {
	id: "ttt-93-mr-mrs-tip-tap-tip.md";
  slug: "ttt-93-mr-mrs-tip-tap-tip";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-94-get-out-now.md": {
	id: "ttt-94-get-out-now.md";
  slug: "ttt-94-get-out-now";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-95-leftovers.md": {
	id: "ttt-95-leftovers.md";
  slug: "ttt-95-leftovers";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-96-whats-up.md": {
	id: "ttt-96-whats-up.md";
  slug: "ttt-96-whats-up";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-97-customer-serviced.md": {
	id: "ttt-97-customer-serviced.md";
  slug: "ttt-97-customer-serviced";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-98-miss-podcasting-2009.md": {
	id: "ttt-98-miss-podcasting-2009.md";
  slug: "ttt-98-miss-podcasting-2009";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-99-steve-mcqueen-haircut.md": {
	id: "ttt-99-steve-mcqueen-haircut.md";
  slug: "ttt-99-steve-mcqueen-haircut";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-kids-001-eurovision-movies.md": {
	id: "ttt-kids-001-eurovision-movies.md";
  slug: "ttt-kids-001-eurovision-movies";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-kids-002-the-simpsons.md": {
	id: "ttt-kids-002-the-simpsons.md";
  slug: "ttt-kids-002-the-simpsons";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt-tv-1-flashing-lights.md": {
	id: "ttt-tv-1-flashing-lights.md";
  slug: "ttt-tv-1-flashing-lights";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
"ttt90-tactless.md": {
	id: "ttt90-tactless.md";
  slug: "ttt90-tactless";
  body: string;
  collection: "episodes";
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
