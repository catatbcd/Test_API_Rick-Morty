import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';

@Component({
  standalone: true,
  selector: 'app-character-modal',
  imports: [CommonModule],
  styleUrls: ['./character-modal.component.css'],
  templateUrl: './character-modal.component.html',
})
export class CharacterModalComponent {
  @Input() character: any;
  @Output() close = new EventEmitter<void>();
  episodeDetails: any[] = [];
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    if (this.character?.episode?.length) {
      this.characterService.getEpisodes(this.character.episode).subscribe((episodes) => {
        this.episodeDetails = episodes;
      });
    }
  }

  onClose() {
    this.close.emit();
  }
}
