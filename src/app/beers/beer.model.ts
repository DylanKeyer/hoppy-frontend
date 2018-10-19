export class Beer {
	constructor(
	public name: string,
	public description: string,
	public updated_dtm: Date,
	public created_dtm: Date,
	public abv: number,
	public ibu: number,
	public _id?: number,
	) { }
}