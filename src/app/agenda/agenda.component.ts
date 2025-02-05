import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  imports: [CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgendaComponent {
    agenda: string[] = [];
    newAgenda = '';

    addAgenda() {
        if (this.newAgenda) {
            this.agenda = [...this.agenda, this.newAgenda];
            this.newAgenda = '';
        }
    }

    removeAgenda(index: number) {
        this.agenda.splice(index, 1);
        this.agenda = [...this.agenda];
    }
}
