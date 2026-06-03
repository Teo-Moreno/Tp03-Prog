namespace Tp03.Models;

public class PalabrasAhorcado
{
    private List<string> palabras;

    public PalabrasAhorcado()
    {
        palabras = new List<string> { "CAMINATA", "MONTAÑAS", "PINTURAS", "VENTANAS", "SONRISAS", "PALABRAS", "CUADERNO", "TORMENTA", "ELEFANTE", "JARDINES" };
    }

    public string ObtenerPalabra()
    {
        Random rnd = Random new();
        return palabras[rnd.Next(0,palabras.Count)];
    }
}