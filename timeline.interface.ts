import IDocument from "./document.interface";

/**
 * Interface for each year of the timeline.
 * @example
 * {"2019": [
 *   {"Thang 1": [
 *     {"1": [IDocument, IDocument, ...]},
 *     {"2": [IDocument, IDocument, ...]},
 *     ...
 *     {"31": [IDocument, IDocument, ...]}
 *   ]},
 *   ...
 *  {"Thang 12": [
 *     {"1": [IDocument, IDocument, ...]},
 *     {"2": [IDocument, IDocument, ...]},
 *     ...
 *     {"31": [IDocument, IDocument, ...]}
 *   ]},
 * ]}
 * */
export interface ITimeline {
	[year: string]: { [month: string]: { [day: string]: IDocument[] }[] }[];
}
