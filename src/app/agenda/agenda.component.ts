import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  imports: [CommonModule, FormsModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgendaComponent {
    agenda = model<string[]>([]);
    newAgenda = model<string>('');

    agendaItems = computed(() => this.agenda())

    addAgenda() {
        if (this.newAgenda) {
            this.agenda.set([...this.agenda().concat(this.newAgenda())]);
            this.newAgenda.set('');
        }
    }

    removeAgenda(index: number) {
        this.agenda().splice(index, 1);
        this.agenda.set([...this.agenda()]);
    }
}
