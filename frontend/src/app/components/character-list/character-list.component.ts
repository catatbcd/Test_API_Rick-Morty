import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { FormsModule } from '@angular/forms';
import { CharacterModalComponent } from '../character-modal/character-modal.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CharacterModalComponent],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  selectedCharacter: any = null;
  showModal: boolean = false;
  error: string | null = null;
  currentPage: number = 1;
  totalPages: number = 1;
  searchName: string = '';

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.loadAllCharacters(1); // cargar todos al inicio
  }
  loadAllCharacters(page: number): void {
    this.characterService.getAllCharacters(page).subscribe({
      next: response => {
        this.characters = response.results;
        this.totalPages = response.info?.pages || 1;
        this.currentPage = page;
        this.error = null;
      },
      error: () => {
        this.characters = [];
        this.error = 'Error al cargar personajes.';
      }
    });
  }

  searchCharacters(page: number = 1): void {
    if (!this.searchName.trim()) {
      this.loadAllCharacters(page); // si no hay nombre, mostrar todos
      return;
    }

    this.characterService.getCharactersByNameAndPage(this.searchName.trim(), page).subscribe({
      next: response => {
        this.characters = response.results;
        this.totalPages = response.info?.pages || 1;
        this.currentPage = page;
        this.error = null;
      },
      error: () => {
        this.characters = [];
        this.totalPages = 1;
        this.currentPage = 1;
        this.error = 'No se encontraron personajes con ese nombre.';
      }
    });
  }

  goToPage(page: number): void {
    if (this.searchName.trim()) {
      this.searchCharacters(page);
    } else {
      this.loadAllCharacters(page);
    }
  }

  openCharacterModal(character: any): void {
    this.selectedCharacter = character;
    this.showModal = true;
  }

  closeModal(): void {
    this.selectedCharacter = null;
    this.showModal = false;
  }
}
