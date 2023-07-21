import IDocument from "./document.interface";

/**
 * Interface for each year of the timeline.
 * @example
 * {"2019": [
 *   {"Thang 1": [IDocument, IDocument, ...]},
 *   {"Thang 2": [IDocument, IDocument, ...]},
 *   ...
 *   {"Thang 12": [IDocument, IDocument, ...]}
 * ]}
 * */
export interface ITimeline {
	[key: string]: { [key: string]: IDocument[] }[];
}
