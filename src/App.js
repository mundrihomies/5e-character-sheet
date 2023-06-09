import logo from './logo.svg';
import './App.css';

function LabelInputField({ label, placeholder, value }) {
  return (
    <form>  
      <input type="text" placeholder={placeholder} value={value} />
      <label>
        {label}
      </label>
    </form>
  );
}

function CharacterOverviewSection({ classLevel, background, playerName, race, alignment, xp }) {
  return (
    <div>
      <LabelInputField label="Class & Level" value={classLevel} />
      <LabelInputField label="Background" value={background} />
      <LabelInputField label="Player Name" value={playerName} />
      <LabelInputField label="Race" value={race} />
      <LabelInputField label="Alignment" value={alignment} />
      <LabelInputField label="Experience Points" value={xp} />
    </div>
  );
}

function CharacterNameSection({ name }) {
  return (
    <LabelInputField label="Character Name" placeholder="Caleb Widogast" value={name} />
  );
}

function HeaderRow({ character }) {

  let nameSection = CharacterNameSection(character);
  let overviewSection = CharacterOverviewSection(character);
  
  return (
    <div>
      {nameSection}
      {overviewSection}
    </div>
  );
}

function CharacterSheet({ character }) {
  return (
    <div>
      <HeaderRow character={character}/>
    </div>
  );
}

const CHARACTER = {
  name: "Mogryn Deepdelver",
  classLevel: "Gloomstalker Ranger 5",
  background: "Outlander",
  playerName: "Connor",
  race: "Hill Dwarf",
  alignment: "LN",
  xp: "(Milestone)"
}

function App() {
  return (
    <CharacterSheet character={CHARACTER} />
  );
}

export default App;
