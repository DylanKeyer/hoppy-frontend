export class Beer {
	public image_url: string

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
	) 
	{
		this.image_url = 'assets/images/ipa.png'
	}

	_beerImages: Map<string, string> = new Map(
		[
			[
				'IPA - American',
				'static/images/ipa.png'
			]
		]
	);

	getBeerImage(): string {
		if(this._beerImages.has(this.beer_type)) {
			return 'static/images/ipa.png'

		}
		else {
			return "";
		}
	}
}
