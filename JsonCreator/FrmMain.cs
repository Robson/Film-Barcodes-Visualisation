namespace JsonCreator
{
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Drawing;
    using System.IO;
    using System.Linq;
    using System.Windows.Forms;

    public partial class FrmDisplay : Form
    {
        private const string RootFolder = @"C:\Temp\Films\";
        private const string OutputFilename = "data.js";

        public FrmDisplay()
        {
            InitializeComponent();

            File.WriteAllText(OutputFilename, "var data = [");

            new FrameReader("Frankenstein", RootFolder + "frank");
            new FrameReader("Midsommar", RootFolder + "mid");
            new FrameReader("Oppenheimer", RootFolder + "oppen");

            File.AppendAllText(OutputFilename, "\n];");
        }

        internal class FrameReader
        {
            internal FrameReader(string film, string folder)
            {
                Console.WriteLine("Processing: " + film);

                var colours = new List<Color>();
                var frames = Directory.GetFiles(folder, "*.png").OrderBy(a => GetIndexFromFilename(a));
                Bitmap frame;
                foreach (var filename in frames)
                {
                    frame = (Bitmap)Image.FromFile(filename);
                    long amount = 0, red = 0, green = 0, blue = 0;
                    for (int x = 0; x < frame.Width; x += 2)
                    {
                        for (int y = 0; y < frame.Height; y += 2)
                        {
                            amount++;
                            var pixel = frame.GetPixel(x, y);
                            red += pixel.R;
                            green += pixel.G;
                            blue += pixel.B;
                        }
                    }
                    colours.Add(Color.FromArgb((int)(red / amount), (int)(green / amount), (int)(blue / amount)));
                    frame.Dispose();
                }

                var line =
                  "\n{\"Name\":\"" + film + "\",\"Colours\":[\"" +
                  string.Join("\",\"", colours.Select(a => $"{a.R:X2}{a.G:X2}{a.B:X2}")) +
                  "\"]},";

                File.AppendAllText(OutputFilename, line);
            }

            private int GetIndexFromFilename(string filename)
            {
                filename = Path.GetFileNameWithoutExtension(filename);
                filename = filename.Replace("frame_", "");
                return int.Parse(filename);
            }
        }
    }
}