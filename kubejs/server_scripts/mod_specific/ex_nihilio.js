// priority: 5
onEvent(`recipes`, e => {
	const sieve = (mesh, chance, input, result, wlog) => {
		e.custom({
			type: `exnihilosequentia:sieve`,
			rolls: [{
				chance: chance,
				mesh: mesh
			}],
			input: Ingredient.of(input).toJson(),
			result: Item.of(result).toResultJson(),
			waterlogged: wlog
		});
	};

	const hammer = (input, result) => {
		e.custom({
			type: `exnihilosequentia:hammer`,
			input: Ingredient.of(input).toJson(),
			results: [Item.of(result).toResultJson()]
		});
	};

	const heat = (block, heat) => {
		e.custom({
			type: `exnihilosequentia:heat`,
			block: block,
			amount: heat
		});
	};

	const heavy = (item, source, rolls) => {
		e.custom({
			type: `excompressum:heavy_sieve_generated`,
			input: Ingredient.of(item).toJson(),
			source: source,
			rolls: rolls
		});
	};

	const hhammer = (input, output, count) => {
		e.custom({
			type: `excompressum:compressed_hammer`,
			input: Ingredient.of(input).toJson(),
			lootTable: {
				type: `minecraft:block`,
				pools: [{
					rolls: 1,
					entries: [{
						type: `minecraft:item`,
						name: output,
						functions: [{
							function: `minecraft:set_count`,
							count: count
						}]
					}],
					conditions: []
				}]
			}
		});
	};

	var exDust = `exnihilosequentia:dust`;
	var exRack = `exnihilosequentia:crushed_netherrack`;
	var exEnd = `exnihilosequentia:crushed_end_stone`;

	//Crucible heating `blocks`
	heat(`botania:blaze_block`, 8);
	heat(`allthemodium:molten_bluelava`, 50);
	heat(`alltheores:uranium_block`, 20);
	heat(`minecraft:magma_block`, 3);
	heat(`minecraft:fire`, 4);
	heat(`minecraft:lava`, 5);

	//Params go like this: Mesh, Drop chance, Input item, Output item, Waterlogged.
	//Overworld sieve
	sieve(`diamond`, 0.3, `minecraft:gravel`, `mysticalagriculture:inferium_essence`, null);
	sieve(`diamond`, 0.2, `minecraft:gravel`, `mysticalagriculture:prosperity_shard`, null);
	sieve(`diamond`, 0.1, `minecraft:gravel`, `ars_nouveau:mana_gem`, null);
	//sieve(`emerald`, 0.02, `minecraft:gravel`, `astralsorcery:rock_crystal`, null);
	sieve(`iron`, 0.15, `#minecraft:sand`, `astralsorcery:aquamarine`, true);
	sieve(`iron`, 0.25, `#minecraft:sand`, `minecraft:ink_sac`, true);
	sieve(`iron`, 0.05, `minecraft:gravel`, `kubejs:piece_osmium`, null);
	sieve(`diamond`, 0.1, `minecraft:gravel`, `kubejs:piece_osmium`, null);
	sieve(`iron`, 0.025, `minecraft:gravel`, `kubejs:piece_osmium`, null);
	sieve(`diamond`, 0.05, `minecraft:gravel`, `mekanism:fluorite_gem`, null);
	sieve(`flint`, 0.01, `#minecraft:sand`, `mekanism:salt`, null);
	sieve(`iron`, 0.02, `#minecraft:sand`, `mekanism:salt`, null);
	sieve(`diamond`, 0.4, `#minecraft:sand`, `mekanism:salt`, null);
	sieve(`flint`, 0.09, `minecraft:sand`, `mana-and-artifice:vinteum_dust`, null);
	sieve(`flint`, 0.05, `#forge:gravel`, `thermal:apatite`, null);
	sieve(`iron`, 0.1, `#forge:gravel`, `thermal:apatite`, null);
	sieve(`diamond`, 0.15, `#forge:gravel`, `thermal:apatite`, null);
	sieve(`flint`, 0.05, `#forge:gravel`, `thermal:cinnabar`, null);
	sieve(`iron`, 0.1, `#forge:gravel`, `thermal:cinnabar`, null);
	sieve(`diamond`, 0.15, `#forge:gravel`, `thermal:cinnabar`, null);
	sieve(`flint`, 0.05, `#forge:gravel`, `thermal:niter`, null);
	sieve(`iron`, 0.1, `#forge:gravel`, `thermal:niter`, null);
	sieve(`diamond`, 0.15, `#forge:gravel`, `thermal:niter`, null);
	sieve(`flint`, 0.05, `#forge:gravel`, `thermal:sulfur`, null);
	sieve(`iron`, 0.1, `#forge:gravel`, `thermal:sulfur`, null);
	sieve(`diamond`, 0.15, `#forge:gravel`, `thermal:sulfur`, null);

	//Nether sieve
	sieve(`diamond`, 0.2, exRack, `appliedenergistics2:fluix_crystal_seed`, null);
	sieve(`diamond`, 0.3, exRack, `mysticalagriculture:inferium_essence`, null);
	sieve(`diamond`, 0.2, exRack, `minecraft:netherite_scrap`, null);
	sieve(`diamond`, 0.15, exRack, `create:rose_quartz`, null);
	sieve(`iron`, 0.2, exRack, `minecraft:quartz`, null);
	sieve(`iron`, 0.25, exRack, `forbidden_arcanus:arcane_crystal_dust`, null);
	sieve(`iron`, 0.15, `#forge:soul_sand`, `mysticalagriculture:soulium_dust`, null);

	//End sieve
	sieve(`diamond`, 0.1, exEnd, `minecraft:chorus_flower`, null);

	//Pams Bushes
	sieve(`flint`, 0.2, `minecraft:sand`, `pamhc2crops:aridgarden`, true);
	sieve(`flint`, 0.2, `minecraft:dirt`, `pamhc2crops:tropicalgarden`, true);
	sieve(`flint`, 0.2, `minecraft:dirt`, `pamhc2crops:soggygarden`, true);
	sieve(`flint`, 0.2, `minecraft:dirt`, `pamhc2crops:windygarden`, true);
	sieve(`flint`, 0.2, `minecraft:dirt`, `pamhc2crops:shadedgarden`, true);
	sieve(`flint`, 0.2, `minecraft:dirt`, `pamhc2crops:frostgarden`, true);


	//modium integration
	sieve(`netherite`, 0.02, `minecraft:gravel`, `kubejs:piece_mod`, null);
	sieve(`netherite`, 0.02, exRack, `kubejs:piece_vib`, null);
	sieve(`netherite`, 0.02, exEnd, `kubejs:piece_unob`, null);

	//Heavy sieving | Params: Item to sieve, normal sieving item, how many rolls(multiplier for drops)
	heavy(`compressium:cobblestone_1`, `minecraft:cobblestone`, 9);
	heavy(`compressium:gravel_1`, `minecraft:gravel`, 9);
	heavy(`compressium:sand_1`, `minecraft:sand`, 9);
	heavy(`compressium:dirt_1`, `minecraft:dirt`, 9);
	heavy(`compressium:soul_sand_1`, `minecraft:soul_sand`, 9);

	//Hammer recipes
	hammer(`compressium:cobblestone_1`, `compressium:gravel_1`);
	hammer(`compressium:gravel_1`, `compressium:sand_1`);
	hammer(`#minecraft:logs`, `thermal:sawdust`);

	//Heavy hammer
	hhammer(`compressium:cobblestone_1`, `minecraft:gravel`, 9);
	hhammer(`compressium:gravel_1`, `minecraft:sand`, 9);
	hhammer(`compressium:sand_1`, `exnihilosequentia:dust`, 9);
	hhammer(`compressium:netherrack_1`, `exnihilosequentia:crushed_netherrack`, 9);
	hhammer(`compressium:end_stone_1`, `exnihilosequentia:crushed_end_stone`, 9);
	hhammer(`compressium:diorite_1`, `exnihilosequentia:crushed_diorite`, 9);
	hhammer(`compressium:granite_1`, `exnihilosequentia:crushed_granite`, 9);
	hhammer(`compressium:andesite_1`, `exnihilosequentia:crushed_andesite`, 9);

	var chunks = [
		`mod`,
		`vib`,
		`unob`,
		`osmium`
	];
	chunks.forEach(name => {
		e.shaped(`kubejs:chunk_${name}`, [
			`aa`,
			`aa`
		], {
			a: `kubejs:piece_${name}`
		});
	});

	const crushEm = (result, crush) => {
		e.recipes.mekanism.crushing(Item.of(result), crush);
		e.recipes.thermal.pulverizer(Item.of(result), crush);
		e.recipes.immersiveengineering.crusher(Item.of(result), crush);
		e.recipes.create.milling(Item.of(result), Item.of(crush));
		e.custom({
			type: `pedestals:pedestal_crushing`,
			ingredient: Ingredient.of(crush).toJson(),
			result: Item.of(result).toResultJson(),
		});
		e.custom({
			type: `appliedenergistics2:grinder`,
			input: Ingredient.of(crush).toJson(),
			result: {
				primary: Item.of(result).toResultJson()
			},
			turns: 8
		});
		e.custom({
			type: `integrateddynamics:squeezer`,
			item: Ingredient.of(crush).toJson(),
			result: {
				items: [Item.of(result).toResultJson()]
			}
		});
		e.custom({
			type: `integrateddynamics:mechanical_squeezer`,
			item: Ingredient.of(crush).toJson(),
			result: {
				items: [Item.of(result).toResultJson()]
			},
			duration: 40
		});
	};

	crushEm(exDust, `#minecraft:sand`);
	crushEm(exRack, `#forge:netherrack`);
	crushEm(exEnd, `#forge:end_stones`);
});
