import bcp from '../assets/images/bcp.png';
import bbva from '../assets/images/bbva.png';
import interbank from '../assets/images/interbank.jpg';
import banbif from '../assets/images/banbif.png';
import fullcarga from '../assets/images/fullcarga.jpg';
import scotiabank from '../assets/images/scotiabank.jpg';
import westernunion from '../assets/images/westernunion.png';
import kasnet from '../assets/images/kasnet.png';

export default function() {
  return
  [
    {
      id: 'bcp',
      logo: bcp,
      tags: ['Agentes y Bodegas', 'Agencias'],
      instructions: [
        'Agentes BCP: Brinda el código de empresa 02186.',
        'Agencias BCP: Costo adicional S/1.00.'
      ]
    },
    {
      id: 'bbva',
      logo: bbva,
      tags: ['Agentes y Bodegas', 'Agencias'],
      instructions: []
    },
    {
      id: 'interbank',
      logo: interbank,
      tags: ['Agentes y Bodegas', 'Agencias'],
      instructions: [
        'Agentes Interbank: Brinda el siguiente código 2735001.',
        'Agencias Market de Interbank: Costo adicional S/2.00.'
      ]
    },
    {
      id: 'banbif',
      logo: banbif,
      tags: ['Agencias'],
      instructions: []
    },
    {
      id: 'fullcarga',
      logo: fullcarga,
      tags: ['Bodegas, Farmacias'],
      instructions: [
        'Encuentra a FullCarga en bodegas, farmacias, cabinas de internet y locutorios.'
      ]
    },
    {
      id: 'scotiabank',
      logo: scotiabank,
      tags: ['Agencias'],
      instructions: []
    },
    {
      id: 'westernunion',
      logo: westernunion,
      tags: ['Agentes y Bodegas', 'Agencias'],
      instructions: []
    },
    {
      id: 'kasnet',
      logo: kasnet,
      tags: ['Agentes'],
      instructions: []
    },
  ]
}