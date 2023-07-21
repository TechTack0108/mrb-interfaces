import IDocument from "./document.interface";

/**
 * Interface for each year of the timeline.
 * @example
 * {"2019": {
 *   "Thang 1": {
 *     "1": {
 *     		files: [IDocument, IDocument, ...],
 *     		totalFiles: 100,
 *     		totalPages: 10
 *     	}
 *     ...
 *   },
 *   ...
 *  }
 * }
 * */
export interface ITimeline {
	[year: string]: {
		[month: string]: {
			[day: string]: {
				files: IDocument[];
				totalFiles: number;
				totalPages: number;
			};
		};
	};
}
