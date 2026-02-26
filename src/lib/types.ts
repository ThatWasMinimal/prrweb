export interface AURPackageDetailed {
	ID: number;
	Name: string;
	PackageBaseID: number;
	PackageBase: string;
	Version: string;
	Description: string;
	URL: string;
	NumVotes: number;
	Popularity: number;
	OutOfDate: number | null;
	Maintainer: string;
	FirstSubmitted: number;
	LastModified: number;
	License: string[];
	Keywords: string[];
	Depends?: string[];
	MakeDepends?: string[];
	OptDepends?: string[];
	CheckDepends?: string[];
	Submitter: string;
}

export interface AURResponse {
	version: number;
	type: string;
	resultcount: number;
	results: AURPackageDetailed[];
}

export type PackageInfo = {
	name: string;
	votes: number;
	popularity: number;
	description: string | null;
	version: string;
	maintainer?: string;
	lastupdated?: string;
};
