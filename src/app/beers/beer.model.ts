export class Beer {
	constructor(
	public beer_name: string,
	public brewery_id: number,
	public description: string,
	public updated_dtm: Date,
	public created_dtm: Date,
	public abv: number,
	public ibu: number,
	public id: number,
	public beer_type: string,
	) { }
}
