
import Context from "./Context";
import RepositoryDatabase from "./RepositoryDatabase";
import RepositoryMemory from "./RepositoryMemory";

const repositoryMemory = new RepositoryMemory();
const repositoryDatabase = new RepositoryDatabase();

const contextMemory = new Context(repositoryMemory);
contextMemory.operation();

const contextDatabase = new Context(repositoryDatabase);
contextDatabase.operation();
